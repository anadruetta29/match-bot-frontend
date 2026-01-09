import { env } from "../../core";
import { Message } from "../../domain";

type ChatMessageCallback = (message: Message) => void;
type ChatSessionClosedCallback = (result: any | null) => void; 

export class ChatService {
    private socket: WebSocket | null = null;
    private onMessageCallback: ChatMessageCallback | null = null;
    private onSessionClosedCallback: ChatSessionClosedCallback | null = null;

    private readonly BASE_URL = env.WEBSOCKET_URL;

    public connect(): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) return;
        if (!this.BASE_URL) {
            console.error("WebSocket URL no definida");
            return;
        }

        this.socket = new WebSocket(this.BASE_URL);

        this.socket.onopen = () => {
            console.log("WebSocket conectado");
        };

        this.socket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.ping === true || data.type === "PING") return;

                const message = Message.fromObject(data);
                if (!message) return;

                if (this.onMessageCallback) {
                    this.onMessageCallback(message);
                }

                if (data.finished && this.onSessionClosedCallback) {
                    this.onSessionClosedCallback(data.result ?? null);
                }

            } catch (error) {
                console.error("Error parseando mensaje:", error, event.data);
            }
        };

        this.socket.onclose = (event) => {
            console.log(`WebSocket cerrado: ${event.code} ${event.reason}`);
        };

        this.socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };
    }

    public disconnect(): void {
        if (this.socket) {
            this.socket.close();
            this.socket = null;
        }
    }

    public sendAnswer(option_id: number): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify({ option_id }));
        } else {
            console.error("WebSocket no conectado. No se puede enviar mensaje.");
        }
    }

    public onMessageReceived(callback: ChatMessageCallback): void {
        this.onMessageCallback = callback;
    }

    public onSessionClosed(callback: ChatSessionClosedCallback): void {
        this.onSessionClosedCallback = callback;
    }
}
