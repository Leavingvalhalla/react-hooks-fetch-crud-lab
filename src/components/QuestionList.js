import React from 'react';
import QuestionItem from './QuestionItem.js';

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions
          ? questions.map((question) => (
              <QuestionItem key={question.id} question={question} />
            ))
          : null}
      </ul>
    </section>
  );
}

export default QuestionList;
