import Options from "./Option";

function Questions({ question, dispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}

export default Questions;
