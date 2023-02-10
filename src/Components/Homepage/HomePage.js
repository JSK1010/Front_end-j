import React from 'react'
import './HomePage.Styles.scss'
import vitLogo from '../../Assets/images/logo.png'
import viteconLogo from '../../Assets/images/vitecon-logo1.png'
import ieeeLogo from '../../Assets/images/ieee-logo.png'
import vitImg from '../../Assets/images/vit-clg.jpg'
import { IoCalendarNumberSharp, IoLocationSharp } from 'react-icons/io5'
import Countdown from "react-countdown";
import MapSection from '../MapSection/MapSection'

const HomePage = () => {
    const renderer = ( props ) => {
        return(
            <div className='timer-container'>
                <span className='time'>{props.formatted.days}</span>
                <span className='seperator'>:</span>
                <span className='time'>{props.formatted.hours}</span>
                <span className='seperator'>:</span>
                <span className='time'>{props.formatted.minutes}</span>
                <span className='seperator'>:</span>
                <span className='time'>{props.formatted.seconds}</span>
            </div>
        )
    }

    return (
        <div className='homepage'>
            <section className='landing-section'>
                <div className='college-logo'>
                    <img src={vitLogo} alt='Vit Logo' />
                </div>
                <div className='content'>
                    <div className='heading-logo-container'>
                        <img src={viteconLogo} alt='vit-logo' />
                    </div>
                    <div className='heading-primary'>
                        <span className='small'> IEEE 2nd International Conference on </span><br />
                        <span className='orange'>Vi</span>sion <span className='orange'>T</span>owards <span className='orange'>E</span>merging Trends in <br />
                        <span className='orange'>Co</span>mmunication and <span className='orange'>N</span>etworking Technologies
                    </div>
                    <div className='heading-primary orange-only'>
                        ViTECoN-2023
                    </div>
                    <div className='details'>
                        <span className='detail event-date'>
                            <a rel="noreferrer" href='https://calendar.google.com/event?action=TEMPLATE&tmeid=MDUybHVzbjlpMWUxamtka21ycnI5NTM4dWUgeWFzaHdhbnRoa29sbGkzMjcxQG0&tmsrc=yashwanthkolli3271%40gmail.com' target='_blanck'>
                                <IoCalendarNumberSharp />
                            </a>
                            5th - 6th May, 2023
                        </span>
                        <span className='detail event-date'>
                            <a href='https://goo.gl/maps/uHeghJHkexEN4zR4A' rel='noreferrer' target='_blanck'>
                                <IoLocationSharp />
                            </a>
                            School of Electronics Engineering (SENSE), VIT, Vellore, TN, India
                        </span>
                    </div>
                    <div className='buttons'>
                        <button className='btn'>Presentation Schedule</button>
                        <button className='btn'>Brochure</button>
                        <a className='btn' href='https://www.ieee.org/' target='_blank' rel='noreferrer'>IEEE Website</a>
                    </div>
                    <div className='event-handlers'>
                        <div className='handler ieee-details'>
                            <div className='logo-container'>
                                <img src={ieeeLogo} alt='IEEE Logo' />
                            </div>
                        </div>
                        <div className='other-details'>
                            <div className='prev-ieee'>
                                ViTECoN Previous Publications
                                <div className='links'> 
                                    <a href='https://ieeexplore.ieee.org/xpl/conhome/8893975/proceeding' target='_blank' rel='noreferrer'>2019</a>
                                </div>
                            </div>
                            <div className='ids'>
                                <a href='https://conferences.ieee.org/conferences_events/conferences/conferencedetails/58111' target='_blank' rel='noreferrer'>Approved by IEEE</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dates-part'>
                    <div className='date-container'>
                        <div className='date-heading'>Paper Submission Deadline</div>
                        <div className='date'>15th March, 2023</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-heading'>Notification of Acceptance</div>
                        <div className='date'>25th March, 2023</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-heading'>Author Registration</div>
                        <div className='date'>8th April, 2023</div>
                    </div>
                    <div className='date-container'>
                        <div className='date-heading'>Conference Date</div>
                        <div className='date'>5th - 6th May, 2023</div>
                    </div>
                </div>
            </section>

            <section className='countdown-section'>
                <h1 className='heading-secondary'>MEET US ON MAY 5th, 2023</h1>
                <Countdown date='2023-05-05T00:00:00' renderer={renderer} zeroPadTime={2} />
            </section>

            <section className='about-us-section'>
                <div className='content scope'>
                    <h1 className='heading-secondary'>Scope of ViTECoN</h1>
                    <div className='text'>The International Conference on Vision Towards Emerging Trends in Communication 
                    and Networking Technologies (ViTECoN-2023) is the premier forum for the presentation of new advances and research 
                    results in the fields of Electronics and Communication Engineering. The conference will bring together 
                    leading researchers, engineers and scientists in the domain of interest from around the world.
                    <br />
                    <br />
                    The scope of the conference includes, but not limited to Electronics, Communication Engineering, Computing, signal 
                    processing and Image Processing, Genetic Algorithms, Robotics, Machine Learning and Deep Learning, 
                    Machine Translation, Neural Networks, Next generation Communication and networking, etc.</div>
                </div>
                <div className='content about'>
                    <h1 className='heading-secondary'>About VIT</h1>
                    <div className='text'>
                        Vellore Institute of Technology was founded in 1984 as Vellore Engineering College by Dr. G. Viswanathan, 
                        a former Parliamentarian and Minister in the Tamil Nadu government. The Deemed to be University status 
                        was conferred in June, 2001 by MHRD Govt. of India. Currently, VIT has eco-friendly campuses in Vellore, 
                        Chennai, Amaravathi and Bhopal.
                        <br />
                        VIT attracts students from all the states and union territories of India and 60 different countries, owing 
                        to its academic excellence.
                        <div className='img-container'>
                            <img src={vitImg} alt='vit university' />
                        </div>
                        Vellore Institute of Technology (VIT) has emerged as one of the best institutes of India and is aspiring to 
                        become a global leader. Having fully committed to its Vision - "Transforming life through excellence in education 
                        and research", VIT focuses on Quality in teaching-learning, research and innovation, thereby making the institute 
                        distinct from others.
                        <br />
                        <br />
                        VIT is ranked 9th in University Category, 10th in Research Category, 12th in Engineering Category and 18th in 
                        Overall Category in 2022 NIRF Ranking published by the Ministry of Education, Govt. of India. National Assessment 
                        and Accreditation Council (NAAC) has accredited VIT with the highest grade A++ in 2021 (4th cycle). 
                        <br />
                        Some of the significant achievements of the institution in the last five years are:
                        <br />
                        •	VIT is one of the top 3 institutions of India and within the top 601-700 Universities of the world as per 
                        Shanghai ARWU Ranking 2022
                        <br />
                        •	Ranked within top 200 in Asia (QS - Asia University Rankings 2022) 
                        <br />
                        •	Eight Subjects of VIT are ranked by QS World University Ranking by Subject 2022
                        <br />
                        •	Ranked No.1 in ARIIA-2019 among the private institutions.
                        <br />
                        •	Ranked by QS World University Ranking, Times Higher Education (THE) World University Ranking, US News Ranking, 
                        Round University Ranking, Russia and others
                    </div>
                </div>
                <div className='content about'>
                    <h1 className='heading-secondary'>About SENSE</h1>
                    <div className='text'>
                    SENSE at VIT was established for imparting state-of-the-art knowledge in Electronics and Communication Engineering and 
                    allied areas. Students who are eligible are placed on campus and many of them are placed in 
                    core companies every year. The school has set up laboratories with excellent infrastructure in the areas of Electronics, 
                    Communication, VLSI, Embedded, Sensors and Nanotechnology. The latest simulation tools are used to cater to various 
                    specializations and are equipped with facilities for measurement, characterization and synthesis of experimental 
                    as well as theoretical results. Students are encouraged to take up their final year projects abroad too. The School has 
                    many industry sponsored advanced laboratories for carrying research and development. MoUs with many Foreign Universities, 
                    Research Organizations and Industries facilitate student and faculty exchange. Faculty are actively involved in R&D 
                    activities and are working on research projects funded by government organisations like DRDO, ISRO (RESPOND), BRNS and 
                    agencies like DST.
                    </div>
                </div>
            </section>

            <MapSection />
        </div>
    )
}

// <div className='logo-container'>
//     <img src={vitLogo} alt='vit-logo' />
// </div>

export default HomePage