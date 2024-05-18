import { useRouteError } from "react-router-dom";

const Contact = () => {
    const err = useRouteError();
    return (
        <div className="contact">
            <h1>this is our contact</h1>
            <h3> feel free to drop us a message</h3>
        </div>
    )
}
export default Contact;