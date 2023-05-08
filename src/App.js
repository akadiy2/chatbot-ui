import './App.css';
import {useState} from 'react';
import MessageContainer from "./text-message-container";

function App() {
    const messageList = [
        {id: 1, text: "Hello, how can we help you?", sentBy: "bot"}
    ]
    const [message, setMessage] = useState("");


    const [messages, setMessages] = useState(messageList)


    function changeMessage(e) {
        console.log(message);
        setMessage(e.target.value);
        console.log(message);
    }

    function addMessage(e) {
        e.preventDefault()

        let len = messages.length;
        let newList = messages.concat({id: len + 1, text: message, sentBy: "user"})
        setMessages(newList)
        len = messages.length;

        newList = newList.concat({id: len + 2, text: "Response", sentBy: "bot"})
        setTimeout(function(){
            setMessages(newList)
        }, 1000);

    }

    return (
        <div className="chat-window">
                <h1 className={"header"}>AI Chatbot</h1>
                <div className="messages-window">
                    {messages.map((message) => <MessageContainer id={message.id} text={message.text}/>)}

                </div>


                <form id="chat-form" onSubmit={(e) => addMessage(e)}>
                    <input className="input" type="text" id="chat-input" placeholder="Type your message..."
                           value={message}
                           onChange={changeMessage}/>
                    <button id="chat-submit" type="submit">Send</button>
                </form>
        </div>
    );


}

export default App;
