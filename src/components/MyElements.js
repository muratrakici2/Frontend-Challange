export const MyButton = ({ onClick, value, background }) => (
  <button className="my-button" onClick={onClick} style={{ background }}>
    {value}
  </button>
);
export const MyInput = ({ onChange, className, width, defaultValue }) => (
  <input
    defaultValue={defaultValue}
    type="text"
    onChange={onChange}
    className={className}
    style={{ width }}
  />
);
