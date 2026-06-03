import './styles.css'

type Props = {
    text : string;
}

export default function Button({text}: Props) {
    return (
        <div className="app-btn btn-blue mt-20">
            {text}
        </div>
    );
}