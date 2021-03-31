import PropTypes from 'prop-types';

const RadioButton = ({
  className,
  name,
  id,
  label,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className={className}>
      <input
        type="radio"
        name={name}
        id={`rad-${id}`}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`rad-${id}`}>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;
