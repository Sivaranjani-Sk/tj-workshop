import axios from 'axios';
import { toast } from 'react-toastify';

export const getAllQuestionApi = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3000/qb/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const getSubjectQuestionApi = async (subject) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `http://localhost:3000/qb/subject/?subject=${subject}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    toast(error.message);
  }
};

export const qbSubmitApi = async (values) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:3000/qb/submit',
      {
        subject: values.subject,
        answers: values.answers,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'http://localhost:3000/qb/submit',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
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
