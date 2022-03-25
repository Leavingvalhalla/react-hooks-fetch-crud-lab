import React, { useState, useEffect } from 'react';
import AdminNavBar from './AdminNavBar';
import QuestionForm from './QuestionForm';
import QuestionList from './QuestionList';

function App() {
  const [page, setPage] = useState('List');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((res) => res.json())
      .then((questionData) => setQuestions(questionData));
  }, []);

  function onSubmit(newQuestion) {
    setQuestions([...questions, newQuestion]);
    console.log(questions);
  }

  function onDeleteClick(questionId) {
    setQuestions(questions.filter((question) => question.id !== questionId));
  }

  function onFormChange(updatedQuestion) {
    setQuestions(
      questions.map((question) => {
        if (question.id === updatedQuestion.id) return updatedQuestion;
        else return question;
      })
    );
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === 'Form' ? (
        <QuestionForm onSubmit={onSubmit} />
      ) : (
        <QuestionList
          questions={questions}
          onDeleteClick={onDeleteClick}
          onFormChange={onFormChange}
        />
      )}
    </main>
  );
}

export default App;
