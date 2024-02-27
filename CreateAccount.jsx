import React, { useState } from 'react';
import { createUser } from './userModel';
import { createTable, updateTable, getTable, getChoiceStep } from './testModel';



function CreateAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [choiceID, setChoiceID] = useState('');
    const [prompt, setPrompt] = useState('');
    const [choiceText, setChoicetext] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (!username.trim() || !password.trim()) {
            alert('Please enter both username and password.');
            return;
        }

        try {
            await createUser(username, password);
            await createTable(username);
            setUsername('');
            setPassword('');

            alert('Account created successfully!');
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again.');
        }    
    };

    const handleGet = async (event) => {
        event.preventDefault(); 

        if (!username.trim()) {
            alert('Please enter all forms');
            return;
        }
        try {
            console.log(await getTable(username));
            setUsername('');

            alert('Account created successfully!');
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again.');
        } 

    }

    const handleUpdate = async (event) => {
        event.preventDefault(); 

        if (!username.trim() || !choiceID.trim()|| !prompt.trim()|| !choiceText.trim()) {
            alert('Please enter all forms');
            return;
        }
        try {
            await updateTable(username,choiceID,prompt,choiceText);
            setUsername('');

            alert('updated successfully!');
        } catch (error) {
            alert('Error creating account. Please try again.');
            console.error('Error creating account:', error);
        } 
    }



    return (
        <div className="CreateAccount">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>

            <form onSubmit={handleUpdate}>
            <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="choiceID">choiceID:</label>
                    <input 
                        type="number" 
                        id="choiceID" 
                        value={choiceID} 
                        onChange={(e) => setChoiceID(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="prompt">Prompt:</label>
                    <input 
                        type="text" 
                        id="prompt" 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor="choiceText">ChoiceText:</label>
                    <input 
                        type="text" 
                        id="choiceText" 
                        value={choiceText} 
                        onChange={(e) => setChoicetext(e.target.value)} 
                    />
                </div>
                <button type="submit">Create Account</button>
            
            </form>

            <form onSubmit={handleGet}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <button type="submit">Create Account</button>
            
            </form>
        </div>
    );
}

export default CreateAccount;
