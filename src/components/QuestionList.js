import React from 'react';
import QuestionItem from './QuestionItem.js';

function QuestionList({ questions, onDeleteClick, onFormChange }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions
          ? questions.map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                onDeleteClick={onDeleteClick}
                onFormChange={onFormChange}
              />
            ))
          : null}
      </ul>
    </section>
  );
}

export default QuestionList;
