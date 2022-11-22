import "./style.css";

const [amount, setAmount] = useState ("");

const Input = () => (
  <input
    value={amount}
    className="calculator__input"
    type="number"
    name="amount"
    min="0"
    step="any"
    onChange={({target}) => setAmount(target.value)}
  />
);

export default Input;