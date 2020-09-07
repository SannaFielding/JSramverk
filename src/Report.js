import React, { useEffect, useState } from 'react';

const Report = () => {
  return (
    <main>
      <h1>Kmom01</h1>
      <h2>GitHub</h2>
      <p>
        Klicka här för att komma till mitt GitHub-repo.
      </p>
      <h2>RQ1</h2>
      <p>
        Vilka verktyg och hjälpmedel finns för att göra hemsidor och appar mer tillgängliga för användare med funktionsnedsättningar och vilka funktionsnedsättningar finns dessa hjälpmedel för?
      </p>
      <h2>RQ2</h2>
      <p>
        Hur kan man som webbprogrammerare skriva mer tillgänglig kod och i vidare utsträckning designa mer tillgängliga hemsidor? Finns det befintliga riktlinjer och följs dessa?
      </p>
      <h2>README.md</h2>
      <p>
        Nedanstående text är innehållet i min README.md-fil.
      </p>
      <p><code>
      This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

      ## Available Scripts

      In the project directory, you can run:

      ### `yarn start`

      Runs the app in the development mode.<br />
      Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

      The page will reload if you make edits.<br />
      You will also see any lint errors in the console.

      ### `yarn test`

      Launches the test runner in the interactive watch mode.<br />
      See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

      ### `yarn build`

      Builds the app for production to the `build` folder.<br />
      It correctly bundles React in production mode and optimizes the build for the best performance.

      The build is minified and the filenames include the hashes.<br />
      Your app is ready to be deployed!

      See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

      ### `yarn eject`

      **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

      If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

      Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

      You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

      ## Learn More

      You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

      To learn React, check out the [React documentation](https://reactjs.org/).

      ### Code Splitting

      This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

      ### Analyzing the Bundle Size

      This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

      ### Making a Progressive Web App

      This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

      ### Advanced Configuration

      This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

      ### Deployment

      This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

      ### `yarn build` fails to minify

      This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

      </code></p>
    </main>
  );
};

export default Report;

// import React, { useEffect, useState } from 'react';
//
// const Report = ({ match }) => {
// const kmom = match.params.kmom;
// const [questions, setQuestions] = useState([]);
//
// useEffect(() => {
//   fetch(`https://me-api.jsramverk.se/reports/${kmom}`)
//     .then(res => res.json())
//     .then(res => setQuestions(res.data));
// });
//
// const QuestionsList = () =>
//   questions.map((question, index) => (
//     <div className="question" key={index}>
//       <p>
//         <strong>{question.question}</strong>
//       </p>
//       <p>{question.answer}</p>
//     </div>
//   ));
//
// return (
//   <main>
//     <h2>{kmom}</h2>
//     <QuestionsList />
//   </main>
// );
// };
//
// export default Report;
