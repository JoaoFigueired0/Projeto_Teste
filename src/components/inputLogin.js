import '../styles/input.css'

export function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input
                type="email"
                value={props.email}
                key={props.email}
                placeholder={props.placeholder}
                required={props.required}
            />
        </div>
    )
}
