import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import fit1 from "../components/images/fit1.jpeg";
import { Link } from "react-router-dom";


const StyledHome = styled.div`
margin-right: 9%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 60vh;
border: 3px lightblue outset;
border-radius: 10px;
margin-top: 10%;

#intro {
    width: 50%;
    height: 60%;
}

#buttons {
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 1rem;
}

h1 {
    font-size: xx-large;
    border-bottom: 2px solid white;
}

p {
    font-size: large;
}
`

const Home = () => {

    const {push} = useHistory()

    const login = () => {
        push('/login')
    }

    const signup = () => {
        push('/signup')
    }

    return (
        <StyledHome>
            <h1>Welcome To Anywhere Fitness!</h1>
            <div id='intro'>
                <p>
                These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym.
                Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. 
                </p>
                <p>
                While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs.
                AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 
                </p>
                <p>
                Instructors can take attendance, request and process payments, create virtual “punch passes” for each type of class offered, alert clients of cancellations or location changes and so much more.
                Clients can easily find out information on classes - location, class size, start time and duration, as well as reschedule or cancel an upcoming appointment or reservation right from the mobile app.
                </p>
            </div>
            <div id='buttons'>
                <button onClick={signup}>Sign Up</button>
                <button onClick={login}>Login</button>
            </div>


            {/* <div className="main">
                <div className="top"></div>
                <div className="image-container">
                <img src={fit1} alt="" />
             </div>
            
            <div className="btncontainer">
                 <Link to="/choice">
                    <button className="mainbtn">Join Now</button>
                </Link>
            </div>

            <div className="bottom">
                 <h3>Already have an account?</h3>
                <Link to="/login">
                     <button className="loginbtn">Login</button>
                </Link>
            </div> */}
    </div>
        </StyledHome>

    )
}


export default Home;