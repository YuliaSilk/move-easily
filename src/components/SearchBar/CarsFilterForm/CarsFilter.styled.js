import styled from 'styled-components';

export const MainFormCont = styled.div`
  width: 859px;
  height: 74px;
  display: flex;
  gap: 18px;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  align-items: flex-end;
`;
export const FormCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 74px;
  display: flex;
  gap: 8px;
`;
export const FilterName = styled.label`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #8a8a89;
`;
export const Makes = styled.select`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
  background: #f7f7fb;
  border-color: transparent;
`;

export const Price = styled.select`
  border-radius: 14px;
  padding: 14px 18px;
  width: 125px;
  height: 48px;
  background: #f7f7fb;
  border-color: transparent;
`;
export const Mileage = styled.select`
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  width: 320px;
  height: 48px;
  background: #f7f7fb;
  border-color: transparent;
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  width: 136px;
  height: 48px;
  background: ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius.m};
  border: none;
  padding: 14px;
  color: ${p => p.theme.colors.backgraund};
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  &:hover,
  :focus {
    background: ${p => p.theme.colors.acent};
  }
`;
