import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import OptionComponent from '../commons/Optioncomponent.jsx';
import FlatButton from '../commons/buttons/FlatButton.jsx';
import SecondaryButton from '../commons/buttons/SecondaryButton.jsx';
import PrimaryButton from '../commons/buttons/PrimaryButton.jsx';
import ModalView from '../commons/modal/ModalView.jsx';
import SuccessView from './component/SuccessView.jsx';
import {
  getSubjectQuestionApi,
  qbSubmitApi,
} from '../services/questions.js';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const subjectName = params.get('subject');
  const [qbList, setQbList] = useState([]);
  const [answersList, setAnswerList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [seconds, setSeconds] = useState(10 * 60);
  const [submitInd, setSubmitInd] = useState(false);
  const [mark, setMark] = useState(0);
  const itemsPerPage = 1;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(qbList.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedData = qbList.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleOptionChange = (e, id) => {
    setSelectedOption(e.target.value);
    const index = answersList.findIndex((item) => item.id === id);
    if (index !== -1) {
      setAnswerList((prev) => {
        const newList = [...prev];
        newList[index] = {
          id,
          selectedAnswer: e.target.value,
        };
        return newList;
      });
    } else {
      setAnswerList((prev) => [
        ...prev,
        { id, selectedAnswer: e.target.value },
      ]);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getSubjectQb = async () => {
    const response = await getSubjectQuestionApi(subjectName);
    if (response?.data) {
      setQbList(response?.data?.data?.questions);
    }
  };

  const handleQbSubmit = async () => {
    const list = {
      subject: subjectName,
      answers: answersList,
    };
    console.log(list, 'list');
    const response = await qbSubmitApi(list);
    if (response?.data) {
      setShowSuccess(true);
      setMark(response?.data?.data);
    }
  };

  useEffect(() => {
    if (seconds == 0) setShowSuccess(true);
  }, [seconds]);

  useEffect(() => {
    getSubjectQb();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dashboard}>
      {!showSuccess ? (
        <>
          <h1>Welcome to QTech </h1>
          <h4>Practice questions to groom your brain !!</h4>
          <span className={styles.time}>
            Time Remaining: {formatTime(seconds)}
          </span>
          <div className={styles.all_button}>
            <FlatButton
              className={styles.back_button}
              onClick={() => navigate('/landingpage')}
            >
              Back
            </FlatButton>
            <div className={styles.submit_button}>
              <PrimaryButton
                type="submit"
                onClick={() => {
                  if (answersList.length !== qbList.length) {
                    toast('Please answer all the question!');
                  } else {
                    setOpen(true);
                    setSubmitInd(true);
                  }
                }}
              >
                Submit
              </PrimaryButton>
            </div>
          </div>
          <div className={styles.questions}>
            {displayedData.map((data) => (
              <div className={styles.ques_wrap}>
                <p>
                  {data.id} : {data.question}
                </p>
                <div>
                  <OptionComponent
                    options={data.options}
                    optionType={data.optionType}
                    selectedOption={selectedOption}
                    onChange={(e) => handleOptionChange(e, data.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.dashboard_button}>
            <SecondaryButton
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Previous
            </SecondaryButton>
            <Stack>
              <Pagination
                count={pageCount}
                page={page}
                onChange={handleChange}
                color="secondary"
              />
            </Stack>
            <SecondaryButton
              disabled={page === qbList?.length}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </SecondaryButton>
          </div>
          <ModalView
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            setSuccess={() => {
              setOpen(false);
              handleQbSubmit();
            }}
          />
        </>
      ) : (
        <SuccessView
          mark={mark}
          total={qbList?.length}
          submitInd={submitInd}
          seconds={seconds}
        />
      )}
    </div>
  );
}
