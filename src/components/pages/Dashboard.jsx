import styles from "./dashboard.module.css";

export default function Dashboard() {
  const data = [
    {
      id: "Q1",
      question:
        "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
      option_one: "3.328 cm",
      option_two: "3.3 cm",
      option_three: "3.33 cm",
      option_four: "3.32 cm",
    },
    {
      id: "Q2",
      question:
        "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
      option_one: "3.328 cm",
      option_two: "3.3 cm",
      option_three: "3.33 cm",
      option_four: "3.32 cm",
    },
    {
      id: "Q3",
      question:
        "The diameter of spherical bob,when measured with verniar callipers yields value:3.33cm,3.32cm,3.34cm and 3.33cm.The mean diameter to appropriate significant figure is: ",
      option_one: "3.328 cm",
      option_two: "3.3 cm",
      option_three: "3.33 cm",
      option_four: "3.32 cm",
    },
  ];
  return (
    <div className={styles.dashboard}>
      <h1>Welcome to QTECH </h1>
      <div className={styles.questions}>
        {data.map((data) => (
          <div>
            {" "}
            <p>
              {data.id}:{data.question}
            </p>
            <p>1. {data.option_one}</p>
            <p>2. {data.option_two}</p>
            <p>3. {data.option_three}</p>
            <p>4. {data.option_four}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
