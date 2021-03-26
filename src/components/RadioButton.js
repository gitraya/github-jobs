const RadioButton = ({ className, name, id, label }) => {
  return (
    <div className={className}>
      <input type="radio" name={name} id={`rad-${id}`} />
      <label htmlFor={`rad-${id}`}>{label}</label>
    </div>
  );
};

export default RadioButton;
