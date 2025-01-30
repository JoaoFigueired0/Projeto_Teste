import '../styles/button.css'
import '../routes/configRotes'
import { Link as RouterLink } from 'react-router-dom';

const Links = ( {props} ) => {
    return (
        <>
            <div className='container_btt_link'>
                <RouterLink href={props.href}>{props.texto}</RouterLink>
            </div>
            <div>
                <button>{props.texto}</button>
            </div>
        </>
    )
}

export default Links;