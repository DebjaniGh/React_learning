import { useState } from 'react';
import CustomBtn from './CustomButton';

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasTestStarted, setHasTestStarted] = useState(false);

  const fecthQues = async () => {
    const response = await fetch('http://localhost:5000/quiz');
    const data = await response.json();
    setQuestions(data);
  };

  const startTest = async () => {
    await fecthQues();
    setHasTestStarted(true);
    setCurrQues(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  const handleNext = () => {
    // check if selected option is correct -- if yes, increase score
    if (selectedOption === questions[currQues].answer) {
      setScore(score + 1);
    }

    // move to next question or show score if it's the last question
    const nextQues = currQues + 1;
    if (nextQues < questions.length) {
      setCurrQues(nextQues);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  // on clicking restart button, the questions should be fetched again
  // and the test should start from the beginning
  const handleRestart = () => {
    startTest();
  };

  return (
    <div className='quiz-container'>
      <h3 className='quiz-title'>Quiz App</h3>

      {!hasTestStarted && <CustomBtn label='Start Test' onClick={startTest} />}

      {hasTestStarted && showScore && (
        <div className='score-section'>
          Your Score: {score} / {questions.length}
          <CustomBtn label='Restart test' onClick={handleRestart} />
        </div>
      )}

      {hasTestStarted && !showScore && questions.length > 0 && (
        <div className='question-section'>
          <h4>{questions[currQues].question}</h4>
          <ul className='options-list'>
            {questions[currQues].options.map((option) => (
              <li style={{ listStyle: 'none' }} key={option.id}>
                <label className='option-label'>
                  <input
                    type='radio'
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => setSelectedOption(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <CustomBtn
            label={currQues + 1 === questions.length ? 'Finish' : 'Next'}
            onClick={handleNext}
            disabled={selectedOption === null}
          />
        </div>
      )}
    </div>
  );
};

export default QuizApp;
