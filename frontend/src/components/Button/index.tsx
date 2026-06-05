import { Link } from 'react-router-dom';
import './styles.css'

type Props = {
    text: string;
    to: string;
}

export default function Button({ to, text }: Props) {
    return (
        <Link className="app-btn btn-blue mt-20" to={to}>
            {text}
        </Link>
    );
}