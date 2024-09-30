import './ProjTemplate.css'
import greybox from '../../../src/assets/greybox.png'

export function ProjTemplate() {
    return(
        <div className="proj">
            <section className="proj-top">
                <img src={greybox} alt="placeholder" />
                <h1>Project Template</h1>
                <h2>Flourish is an app designed to help patients with multi-symptom chronic illnesses better track, visualize, and communicate their symptoms and triggers over time. Sign up for the iPhone beta.</h2>
                <div className="tags">
                    <button className="tag">UI/UX</button>
                    <button className="tag">UI/UX</button>
                    <button className="tag">UI/UX</button>
                </div>
            </section>
            <section className="proj-body">
                <section className="proj-over"></section>
                <h2>Background</h2>
                <div className="project-detail-info-box">
                    <div className="project-detail-info-box-column">
                        <h3>Time frame</h3>
                        <br/>
                        <ul>
                            <li>January-March 2020</li>
                            <li>(5 mo)</li>
                        </ul>
                    </div>
                    <div className="project-detail-info-box-column">
                        <h3>Role</h3>
                        <br/>
                        <ul>
                            <li>Lead Designer</li>
                        </ul>
                    </div>
                    <div className="project-detail-info-box-column">
                        <h3>Skills</h3>
                        <br/>
                        <ul>
                            <li>User Research</li>
                            <li>User Interviewing</li>
                            <li>Data Analysis</li>
                            <li>Rapid Iteration</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="project-detail-info-box-column">
                        <h3>Team</h3>
                        <br/>
                        <ul>
                            <li>Rachel Liu</li>
                            <li>Rachel Liu</li>
                            <li>Rachel Liu</li>
                            <li>Rachel Liu</li>
                        </ul>
                    </div>
                </div>
                <h3>Background & Problem Statement</h3>
                <h4>Client Needs</h4>
                <p>We first met with our clients at the Asian American Studies Department to understand where they currently were in their project timeline and how we could help them reach their goal:
                    <ul>
                        <li><p>A report on user needs and wants: what would make teachers and students want to use the textbook?</p></li>
                        <li><p>Wanted to understand how to create a textbook that is effective, engaging, and educational.</p></li>
                    </ul>
                </p>
                <h4>Problem Statement:</h4>
            </section>
        </div>
    )
}

