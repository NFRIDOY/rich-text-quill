import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';
import OrderList from './OrderList';

const AdminPanel = () => {
    const [description, setDescription] = useState('');

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the description to the backend or handle as needed
        console.log(description);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Description</label>
                <RichTextEditor value={description} onChange={handleDescriptionChange} />
            </div>
            <button type="submit">Save</button>
            {/* <OrderList orders={description} /> */}
            <div className='des' dangerouslySetInnerHTML={{ __html: description }} />
        </form>
    );
};

export default AdminPanel;
