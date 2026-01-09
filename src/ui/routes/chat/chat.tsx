import ChatWindow from "../../components/organisms/chat-window/chat-window";
import Layout from "../../layout/layout";
import ViewModel from "./viewmodel";

export default function ChatRoute() {
    const { inputValue, messages, onChangeInput, onClickOnSend} = ViewModel();

    return(
        <Layout>
            <ChatWindow
                inputValue={inputValue}
                messages={messages}
                onChangeInput={onChangeInput}
                onClickOnSend={onClickOnSend}
            />
        </Layout>
    );
}