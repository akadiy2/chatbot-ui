import logo from './logo.svg';
import './App.css';

function MessageContainer(props) {
    return (
        <section className={props.id % 2 === 0 ? "right" : "left"}>
            <div className={props.id % 2 === 0 ? "boxed" : "boxed-white"}>
                <p>{props.text}</p>
            </div>
        </section>

    );
}

export default MessageContainer;