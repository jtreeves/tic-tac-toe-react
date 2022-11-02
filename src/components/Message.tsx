import { MessageProp } from '../interfaces'

function Message({
    message
}: MessageProp): JSX.Element {
    return (
        <p>
            {message}
        </p>
    )
}

export default Message
