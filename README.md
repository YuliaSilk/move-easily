# Move Easily - додаток для компанії, що здає авто в оренду

https://yuliasilk.github.io/move-ease-rent-car-app/

Цей проект був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства і налаштування додаткових можливостей
[звернися до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Під час розробки проекту використані бібліотеки npm, їх назви та версії знаходяться у файлі package.json, а саме:

    • для стилізації додатку використовуються бібліотеки Styled Components, React-icons.
    • для роботи з базою даних використовужться Axios, Redux Toolkit.
    • бекенд був створений з використанням mockApi service (https://mockapi.io/).

## Застосунок складається з трьох сторінок:

    ### Home
    сторінка знайомства з компанією.
    ### Catalog 
    тут розміщені оголошення з пропозиціями авто ,які можна взяти в оренду. На сторінці їх 12, але клікнувши на кнопку Load More, з’явиться ще 12 і так щоразу при кліку. Для перегляду попередніх оголошень є кнопка-стрілочка, клікнувши по якій, ви перемуститеся на попередні оголошення. Також можна відфільтрувати оглошення по бренду автомобіля. Для цього потрібно вибрати необхідний варіант у випадаючому списку та натиснути Search. Щоб повернутися до галереї всіх оголошень, потрібно клікнути Catalog у меню навігації.
    ### Favorite 
    тут знаходяться оголошення, які відзначені синім сердечком favorites.

Також виконане зручне меню навігації.


<!-- **** En ***-->


# Move Easily - an application for a car rental company

This project is built on the GoIT template designed for easy project initiation. To get started, enter npm i and npm start in the terminal.

## During the development of the project, npm libraries were used, and their names and versions can be found in the package.json file, specifically:

• Styled Components and React-icons were used for styling the application.
• Axios and Redux Toolkit were utilized for database operations.
• The backend was created using the mockApi service (https://mockapi.io/).

## The application consists of three pages:

### Home: 
Introduction page about the company.

### Catalog: 
Advertisements offering cars for rent are displayed here. Initially, there are 12 ads on the page, but clicking the "Load More" button will reveal an additional 12, and so on with each click. To view previous advertisements, there is an arrow button; clicking it will navigate you to the previous ads. You can also filter ads by the car brand. To do this, select the desired option from the dropdown list and press "Search". To return to the gallery of all ads, click "Catalog" in the navigation menu.

### Favorite: 
This page contains advertisements marked with a blue heart as favorites.

The application also features a convenient navigation menu.