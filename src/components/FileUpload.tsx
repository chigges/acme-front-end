import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [response, setResponse] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setFile(file);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (file) {
            const base64 = await convertToBase64(file);
            console.log("Base64 string:");
            console.log(base64);
            // Replace with your API endpoint
            const apiUrl = 'https://s9w5fyhoi9.execute-api.us-east-2.amazonaws.com/staging/package'; // TODO: Update endpoint url
            axios.post(apiUrl, { content: base64 })
                .then(resp => {
                    setResponse(`Response: ${JSON.stringify(resp.data)}`);
                })
                .catch(error => {
                    setResponse(`Error: ${error.message}`);
                });
        }
    };

    const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = error => reject(error);
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={"flex flex-col justify-center gap-2"}>
                <input aria-label="browse for zip file to upload" type="file" onChange={handleFileChange} accept=".zip" />
                <button className={"bg-blue-900 rounded-md p-2 hover:bg-blue-800 transition"} aria-label="Upload" type="submit">Upload</button>
            </form>
            {response && <p tabIndex={0}>{response}</p>}
        </div>
    );
};

export default FileUpload;
