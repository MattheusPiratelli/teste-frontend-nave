export const Input = ({ label, ...rest }) => {
  return (
    <div>
      <label htmlFor="label">{label}</label>
      <input id="label" type="text" {...rest} />
    </div>
  );
};
