const element = (
  <div className="mainContainer">
    <h1 className="mainHead">Congratulations</h1>
    <div className="subContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="spacing"
      />
      <h1 className="spacing">Kiran V</h1>
      <p className="spacing">
        Vishnu Institute of Computer Education and Technology Hyderabad
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="spacing"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
