import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };
        // console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8010/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        });
    }
    return (
        <div className="Create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                    type="text" 
                    required
                    value = {title} 
                    onChange = {(event) => setTitle(event.target.value)}
                />
                <label>Blog Body: </label>
                <textarea 
                    required
                    value = {body}
                    onChange = {(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog Author: </label>
                <select
                    value = {author}
                    onChange = {(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
                {/* <p>{author}</p> */}
            </form>
        </div>
    );
}
 
export default Create;