import Raect, { useState } from 'react'
import { useHistory } from "react-router-dom"
import axiosWithAuth from '../../Utils/axiosWithAuth'
import styled from 'styled-components'


const StyledClassForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
width: 60vw;
height: 70vh;
margin-top: 10%;
border: 2px outset lightblue;
border-radius: 10px;
background-color: #d4f0fc;
background: linear-gradient(-45deg, #d4f0fc, #02a9f7, #e9ebee);
animation: gradient 8s ease infinite;
background-size: 500% 500%;
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

h1 {
    padding-left: 5%;
    font-size: xxx-large;
}

form {
    padding-left: 5%;
    display: flex;
    flex-direction: column;
}

label {
    font-size: large;
    display: flex;
    flex-direction: column;
}

input {
    width: 70%;
    margin-bottom: 2%;
}

button {
    border-radius: 5px;
    border: 1px black solid;
    width: 20%;
    margin-top: 2%;
}
`


const initialFormValues = {
    ClassId: '',
    Name: '',
    Type: '',
    StartTime: '',
    Duration: '',
    IntensityLevel: '',
    Location: '',
    Attendees: 0,
    ClassSize: ''
}

const CreateClass = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { push } = useHistory()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        axiosWithAuth().post('/api/classes/', formValues)
        .then(res => {
            console.log(res)
            push('/classes')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleCancel = () => {
        console.log('cancel')
        push('/classes')
    }

    return (
        <StyledClassForm>
            <h1>Create New Class:</h1>
            <form onSubmit={handleSubmit}>
            <label>
                    Class ID:
                    <input
                    type='text'
                    placeholder='enter a unique class ID (e.g. 123)...'
                    name='ClassId'
                    value={formValues.ClassId}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Class name:
                    <input
                    type='text'
                    placeholder='enter class name (e.g. Weightlifting)...'
                    name='Name'
                    value={formValues.Name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Class type:
                    <input
                    type='text'
                    placeholder='enter class type (e.g. Body building)...'
                    name='Type'
                    value={formValues.Type}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Start time:
                    <input
                    type='text'
                    placeholder='enter start time (e.g. 2:30pm)...'
                    name='StartTime'
                    value={formValues.StartTime}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Duration:
                    <input
                    type='text'
                    placeholder='enter class duration (e.g. 1hr)...'
                    name='Duration'
                    value={formValues.Duration}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Intesity level:
                    <input
                    type='text'
                    placeholder='enter intensity level (e.g. Hard)...'
                    name='IntensityLevel'
                    value={formValues.IntensityLevel}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Location:
                    <input
                    type='text'
                    placeholder='enter class location (e.g. Central Park)...'
                    name='Location'
                    value={formValues.Location}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Max class size:
                    <input
                    type='text'
                    placeholder='enter maximum class size (e.g. 20)...'
                    name='ClassSize'
                    value={formValues.ClassSize}
                    onChange={handleChange}
                    />
                </label>
                <button type='submit'>Add Class</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </form>
        </StyledClassForm>
    )
}

export default CreateClass;