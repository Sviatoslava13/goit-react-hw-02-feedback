import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={s.list}>
    {options.map(options => (
      <li className={s.item} key={options}>
        <button
          className={s.button}
          type="button"
          onClick={() => onLeaveFeedback(options)}
        >
          {options}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
