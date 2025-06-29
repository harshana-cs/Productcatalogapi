// Button.jsx
function Button({ type = 'button', children, onClick }) {
  return (
    <button type={type} onClick={onClick} className="my-button">
      {children}
    </button>
  );
}

export default Button;