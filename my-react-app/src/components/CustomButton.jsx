const CustomBtn = ({ label, onClick }) => {
  return (
    <button className='custom-btn' onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomBtn;
