export const Input = ({ label }) => {
  return (
    <div>
      <label htmlFor="label">{label}</label>
      <input id="label" type="text" />
    </div>
  );
};
