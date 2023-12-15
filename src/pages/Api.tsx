import { useState } from "react";
import FileUpload from "../components/FileUpload.tsx";

function Api() {
	const url = "https://s9w5fyhoi9.execute-api.us-east-2.amazonaws.com/staging/"; //'http://localhost:5173/'; // TODO: Set the correct endpoint
	const [path, setPath] = useState("");
	const [requestType, setRequestType] = useState("get");
	const [responseData, setResponseData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleRequest = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setResponseData("");

		try {
			const options = {
				method: requestType.toUpperCase(),
				headers: {
					"Content-Type": "application/json",
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
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(`Error: ${error.message}`);
			} else {
				setError(`Error: An unknown error occurred`);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div id="image-backing" className="image-backing" style={{ minHeight: "100vh" }}>
				<section>
					<h1 className="text-4xl">API Frontend</h1>
				</section>
				<section className={"mt-10"}>
					<h2 className={"text-xl font-bold"}>Use the API Directly!</h2>
					<p>
						Select a request type. Type what you want to come after the url in the text
						box.
						<br />
						And then click the Send button to cast the request!
						<br />
						Example: POST packages
					</p>

					<div className="API-form">
						<form
							onSubmit={handleRequest}
							className={"flex gap-2 justify-center items-center"}
						>
							<div className="form-group">
								<select
									className={"bg-gray-900 p-2 rounded-md"}
									name={"request-type"}
									id={"request-type"}
									value={requestType}
									onChange={e => setRequestType(e.target.value)}
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
									onChange={e => setPath(e.target.value)}
									placeholder="Enter Endpoint Path"
									className="my-2 bg-gray-900 h-8 "
								/>
							</div>
							<button
								type="submit"
								className="rounded p-2 my-2 bg-gray-700 hover:bg-gray-500 transition"
								onClick={() => console.log(responseData)}
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
				<section className={"mt-20"}>
					<h2 className={"text-xl font-bold"}>Upload your .zip file!</h2>
					<FileUpload />
				</section>
			</div>
		</>
	);
}

export default Api;
