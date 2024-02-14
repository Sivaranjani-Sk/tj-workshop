import styles from "./dashboard.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import OptionComponent from "../commons/Optioncomponent.jsx";
import SecondaryButton from "../commons/buttons/SecondaryButton.jsx";
import PrimaryButton from "../commons/buttons/PrimaryButton.jsx";
import option1 from "../../assets/option1.jpg";
import option2 from "../../assets/option2.jpg";
import option3 from "../../assets/option3.jpg";
import option4 from "../../assets/option4.jpg";
import ModalView from "../commons/modal/ModalView.jsx";
import SuccessView from "./component/SuccessView.jsx";

const data = [
  {
    id: "Q1",
    question:
      "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
    options: ["33.8 cm", "328 cm", "28 cm", "3.3 cm"],
    answer: "3.3 cm",
    optionType: "string",
  },
  {
    id: "Q2",
    question:
      "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
    options: [option1, option2, option3, option4],
    answer: option1,
    optionType: "image",
  },
  {
    id: "Q3",
    question: "Which of the following statement is true: ",
    options: [
      "coefficient of viscosity is a scaler quantity",
      "surface tension is a scalar quantity ",
      "pressure is a vector quantity",
      "relative density is a scaler quantity ",
    ],
    answer: "pressure is a vector quantity",
    optionType: "string",
  },
  {
    id: "Q4",
    question: "Who wrote the novel 'To Kill a Mockingbird'?",
    options: ["J.K. Rowling", "Harper Lee", "Stephen King", "Ernest Hemingway"],
    answer: "Harper Lee",
    optionType: "string",
  },
  {
    id: "Q5",
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
    optionType: "string",
  },
  {
    id: "Q6",
    question: "What is the chemical symbol for water?",
    options: ["O", "H2O", "HO", "W"],
    answer: "H2O",
    optionType: "string",
  },

  {
    id: "Q7",
    question: "Who is known as the 'Father of Computers'?",
    options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
    answer: "Charles Babbage",
    optionType: "string",
  },
  {
    id: "Q8",
    question:
      "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
    options: [option1, option2, option3, option4],
    answer: option2,
    optionType: "image",
  },
  {
    id: "Q9",
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue whale", "Giraffe", "Hippopotamus"],
    answer: "Blue whale",
    optionType: "string",
  },
  {
    id: "Q10",
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
    optionType: "string",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [mark, setMark] = useState(0);
  const itemsPerPage = 1;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleOptionChange = (e, id) => {
    setSelectedOption(e.target.value);
    const result = data.filter((item) => item.id === id);
    if (result[0].answer == e.target.value) {
      setMark(mark + 1);
    }
  };

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  return (
    <div className={styles.dashboard}>
      {!showSuccess ? (
        <>
          <h1>Welcome to QTech </h1>
          <h4>Practice questions to groom your brain !!</h4>
          <div className={styles.submit_button}>
            <PrimaryButton type="submit" onClick={() => setOpen(true)}>
              Submit
            </PrimaryButton>
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
              disabled={page === data.length}
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
              setShowSuccess(true);
            }}
          />
        </>
      ) : (
        <SuccessView mark={mark} total={data.length} />
      )}
    </div>
  );
}
