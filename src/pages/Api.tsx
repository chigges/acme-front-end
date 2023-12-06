import { useState } from 'react';
function Api() {
    String url = 'https://our-end-point.com/'
    const [path, setPath] = useState("");

    return (
        <>
            <div id="image-backing" className="image-backing" style={{
                minHeight: "100vh",
            }}>
                <section>
                    <h1 className="text-4xl">API Frontend</h1>
                    <p></p>

                    <div className="API-form">
                        <form className={"flex gap-2 justify-center items-center"}>
                            <div className="form-group">
                                <select className={"bg-gray-900 p-2 rounded-md"} name={"request-type"} id={"request-type"}>
                                    <option value={"get"}>GET</option>
                                    <option value={"post"}>POST</option>
                                    <option value={"delete"}>DEL</option>
                                    <option value={"put"}>PUT</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="route"></label>
                                <input
                                    type="text"
                                    id="route"
                                    value={}
                                    className="my-2 bg-gray-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded p-2 my-2 bg-gray-700 hover:bg-gray-500 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Api;
