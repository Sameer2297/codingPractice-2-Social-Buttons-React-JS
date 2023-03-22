const Button = (props) => {
  return <button className={props.className}>{props.content}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="button like-button" content="Like" />
      <Button className="button comment-button" content="Comment" />
      <Button className="button share-button" content="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
