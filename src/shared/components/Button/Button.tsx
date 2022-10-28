interface Props {
  type: string;
  text: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ type, text, onClick }) => {
  return (
    <button type='button' onClick={onClick} className={`btn btn-${type ? type : 'primary'}`}>
      {text}
    </button>
  );
};

export default Button;
