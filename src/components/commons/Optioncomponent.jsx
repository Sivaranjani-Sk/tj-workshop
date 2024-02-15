import React from 'react';
import styles from './option.module.css';

const OptionComponent = ({
  options,
  optionType,
  selectedOption,
  onChange,
}) => {
  return (
    <div>
      <div
        className={
          optionType === 'image' ? styles.optionsContainer : null
        }
      >
        {options.map((option, index) => (
          <div key={index} className={styles.option}>
            <input
              type="radio"
              id={index}
              value={option}
              checked={selectedOption === option}
              onChange={onChange}
            />
            {optionType === 'image' ? (
              <img key={index} src={option} className={styles.img} />
            ) : (
              <label htmlFor={option}>{option}</label>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionComponent;
