import "./style.css"

const Form = ({children}) => (
    <form className="calculator">
        <fieldset className="calculator__fieldset">
          {children}
        </fieldset>
    </form>
)

export default Form;