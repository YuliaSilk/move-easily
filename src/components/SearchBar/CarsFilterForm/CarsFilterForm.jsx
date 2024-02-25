import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import makes from '../../Data/makes.json';
import {
  FilterName,
  FormCont,
  MainFormCont,
  Makes,
  Mileage,
  Price,
  SearchBtn,
} from './CarsFilter.styled';

export const CarFilterForm = ({ onFilter }) => {
  const [filteredMakes, setFilteredMakes] = useState([]);

  useEffect(() => {
    const uniqueMakes = [...new Set(makes)];
    setFilteredMakes(uniqueMakes);
  }, []);

  const searchSchema = Yup.object().shape({
    selectedMake: Yup.string().required('Please choose options'),
  });

  return (
    <Formik
      initialValues={{
        selectedMake: '',
      }}
      validationSchema={searchSchema}
      onSubmit={(values, actions) => {
        if (typeof onFilter === 'function') {
          onFilter(values.selectedMake);
        }
        actions.resetForm();
      }}
    >
      {({ handleChange, handleBlur, values, errors }) => (
        <Form>
          <MainFormCont>
            <FormCont>
              <FilterName htmlFor=" ">Car brand</FilterName>
              <Makes
                id=" "
                name=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.selectedMake}
              >
                <option value="" label="Enter the text" />
                {filteredMakes.map((make, index) => (
                  <option key={index} value={make} label={make} />
                ))}
              </Makes>
              {errors.selectedMake && <div>{errors.selectedMake}</div>}
            </FormCont>
            <FormCont>
              <FilterName htmlFor="selectedMake">Price/ 1 hour</FilterName>
              <Price
                id=" "
                name=" "
                onChange={handleChange}
                onBlur={handleBlur}
                value={values}
              >
                <option value="" label="To $" />
              </Price>
              {errors.selectedMake && <div>{errors.selectedMake}</div>}
            </FormCont>
            <FormCont>
              <FilterName htmlFor="selectedMake">Сar mileage / km</FilterName>
              <Mileage
                id="selectedMake"
                name="selectedMake"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.selectedMake}
              >
                <option value="" label="From/to" />
              </Mileage>
              {errors.selectedMake && <div>{errors.selectedMake}</div>}
            </FormCont>
            <SearchBtn type="submit">Search</SearchBtn>
          </MainFormCont>
        </Form>
      )}
    </Formik>
  );
};
