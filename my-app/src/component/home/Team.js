import React from 'react'
import "../home/Team.css"
import image1 from "./neerajSir.jpg";
import image2 from "./mukeshSir.jpg";
import image3 from "./karan.jpg";
import image4 from "./nitin.jpg";
import image5 from "./sachin.jpg";
import image6 from "./saksham.jpg";

const Team = () => {
    return (
        <div className='main'>
            <div className='heading'>
                <h1>Meet our Team</h1>
            </div>
            <div className='mentors'>
                <div className='neeraj_sir'>
                    <div className='mentorImage'>
                        <img src={image1} alt="Image 1" />
                    </div>
                    <div className='content'>
                        <h2>Dr. Neeraj Goel</h2>
                        <p>Assistant Professor at IIT Ropar, Punjab | Co-principal Director Agriculture &
                            water technology development hub (AWaDH) @ IIT Ropar</p>
                    </div>
                </div>
                <div className='mukesh_sir'>
                    <div className='mentorImage'>
                        <img src={image2} alt="Image 2" />
                    </div>
                    <div className='content'>
                        <h2>Dr. Mukesh Saini</h2>
                        <p>Assistant Professor at IIT Ropar, Punjab | Domain DirectorDomain Director
                            iHub - AWaDH @ IIT Ropar</p>
                    </div>
                </div>
            </div>
            <div className='students'>
                <div className='karan'>
                    <div className='studentImage'>
                        <img src={image3} alt="Image 2" />
                    </div>
                    <div className='content'>
                        <h3>Karan Singh</h3>
                        <p>He is Computer Science student at IIT Ropar.</p>
                    </div>
                </div>
                <div className='nitin'>
                    <div className='studentImage'>
                        <img src={image4} alt="Image 2" />
                    </div>
                    <div className='content'>
                        <h3>Nitin Singhal</h3>
                        <p>He is Computer Science student at IIT Ropar.</p>
                    </div>
                </div>
                <div className='sachin'>
                    <div className='studentImage'>
                        <img src={image5} alt="Image 2" />
                    </div>
                    <div className='content'>
                        <h3>Sachin Patel</h3>
                        <p>He is Computer Science student at IIT Ropar.</p>
                    </div>
                </div>
                <div className='saksham'>
                    <div className='studentImage'>
                        <img src={image6} alt="Image 2" />
                    </div>
                    <div className='content'>
                        <h3>Saksham Srivastava</h3>
                        <p>He is Computer Science student at IIT Ropar.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team