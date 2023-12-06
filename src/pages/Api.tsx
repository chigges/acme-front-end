import { useState } from 'react';

function Api() {
    const url = 'http://localhost:5173/';
    const [path, setPath] = useState("");
    const [requestType, setRequestType] = useState("get");
    const [responseData, setResponseData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setResponseData("");

        try {
            const options = {
                method: requestType.toUpperCase(),
                headers: {
                    'Content-Type': 'application/json'
                    // Add other headers as required
                },
            };

            if (requestType === "post" || requestType === "put") {
                // Add your request body here
                // options.body = JSON.stringify({ key: "value" });
            }

            const response = await fetch(`${url}${path}`, options);

            if (!response.ok) {
                setResponseData("");
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Check if the response is JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                setResponseData(data);
            } else {
                const textData = await response.text();
                setResponseData(textData);
            }
        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div id="image-backing" className="image-backing" style={{ minHeight: "100vh" }}>
                <section>
                    <h1 className="text-4xl">API Frontend</h1>

                    <div className="API-form">
                        <form onSubmit={handleRequest} className={"flex gap-2 justify-center items-center"}>
                            <div className="form-group">
                                <select
                                    className={"bg-gray-900 p-2 rounded-md"}
                                    name={"request-type"}
                                    id={"request-type"}
                                    value={requestType}
                                    onChange={(e) => setRequestType(e.target.value)}
                                >
                                    <option value={"get"}>GET</option>
                                    <option value={"post"}>POST</option>
                                    <option value={"delete"}>DELETE</option>
                                    <option value={"put"}>PUT</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="route"
                                    value={path}
                                    onChange={(e) => setPath(e.target.value)}
                                    placeholder="Enter Endpoint Path"
                                    className="my-2 bg-gray-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="rounded p-2 my-2 bg-gray-700 hover:bg-gray-500 transition"
                                onClick={()=>console.log(responseData)}
                            >
                                Send
                            </button>
                        </form>
                    </div>

                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    {responseData && (
                        <div className="response-data">
                            <h2 className="text-3xl">Response</h2>
                            <pre>{JSON.stringify(responseData, null, 2)}</pre>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}

export default Api;
