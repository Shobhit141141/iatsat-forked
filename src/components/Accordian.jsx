import React from "react";
import "./accordian.css";
import { useState } from "react";

const data = [
  {
    question: "What is an Olympiad exam?",
    answer:
      "Olympiad exams are competitive academic contests that assess students knowledge and skills in various subjects, such as mathematics, science, and languages."
  },

  {
    question: "Who can participate in the IATSAT International Olympiad exams?",
    answer:
      "Students from grades 3rd to 12th can participate in the IATSAT International Olympiad"
  },

  {
    question: "How do I register for an Olympiad exam?",
    answer:
      "Students can sign up through your school or directly through our portal"
  },

  {
    question:
      "What subjects are covered in the IATSAT International Olympiad exams?",
    answer:
      "Olympiad exams cover subjects like Mathematics, Science, English, Reasoning GK, and Verbal Abilities."
  },

  {
    question: "What is the format of the IATSAT International Olympiad exams?",
    answer:
      "The format includes multiple-choice questions, and problem-solving questions, varying by subject."
  },

  {
    question: "How can I prepare for an IATSAT International Olympiad exam?",
    answer:
      "Practice questions and textbooks are available on demand. You can also engage in problem-solving exercises to enhance your skills."
  },
  {
    question: "Are calculators allowed during the exam?",
    answer: "NO. Calculators NOT allowed during the exam"
  },
  {
    question:
      "How are IATSAT International Olympiad exams scored? Is there any negative marking?",
    answer:
      "Scores are usually based on the number of correct answers. There are 8s no negative marks for incorrect responses."
  },
  {
    question: "Do IATSAT International Olympiad exams have prizes or awards?",
    answer:
      "Yes, top performers will receive medals, certificates, and recognition at both national and international levels. There are cash prizes, scholarships, and trips to the Space Research Center."
  },
  {
    question:
      "What are the benefits of participating in the IATSAT International Olympiad exams?",
    answer:
      "IATSAT International Olympiad enhances critical thinking, problem-solving, and subject-specific knowledge, providing a platform to showcase your skills."
  },
  {
    question:
      "How does an IATSAT International Olympiad contribute to academic excellence?",
    answer:
      "By challenging students with advanced problems and topics, international olympiads encourage participants to expand their knowledge, problem-solving skills, and critical thinking abilities, thus enhancing their overall academic performance."
  },
  {
    question:
      "What is the impact of IATSAT International Olympiad on participants?",
    answer:
      "IATSAT International Olympiad offers participants a chance to develop a global perspective, gain valuable experience, and potentially open doors to future educational and professional opportunities."
  },
  {
    question:
      "How does IATSAT International Olympiad foster international understanding?",
    answer:
      "By bringing together students from diverse backgrounds, an IATSAT International Olympiad creates an environment where participants can learn from each others perspectives, helping to bridge cultural gaps and build global connections."
  }
];

function Accordian() {
  const [selected, setselected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setselected(null);
    }

    setselected(i);
  };
  return (
    <>
      <div className="wrapper">
        <div className="accordian">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h3>{item.question}</h3>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Accordian;
