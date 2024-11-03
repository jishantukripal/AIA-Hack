/* eslint-disable react/prop-types */


const Button = ({ onClick, label, type }) => {
  return (
    <button type={type} onClick={onClick} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
      {label}
    </button>
  );
};

export default Button;