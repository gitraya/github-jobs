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

export default RadioButton;
