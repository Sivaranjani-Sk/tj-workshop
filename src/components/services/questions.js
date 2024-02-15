import axios from 'axios';
import { toast } from 'react-toastify';

export const getAllQuestionApi = async () => {
  try {
    const response = await axios.get('http://localhost:3000/qb/all');
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const getSubjectQuestionApi = async (subject) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/qb/subject/?subject=${subject}`
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const qbSubmitApi = async (values) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/qb/submit',
      {
        subject: values.subject,
        answers: values.answers,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const qbCreateApi = async (values) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/qb/submit',
      {
        subjectName: values.subject,
        questions: values.questions,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};
