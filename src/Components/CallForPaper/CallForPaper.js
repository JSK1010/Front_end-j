import React from 'react'
import './CallForPaper.Styles.scss'

const CallForPaper = () => {
    return (
        <div className='call-for-paper'>
            <div className='content'>
                <h1 className='heading-secondary'>Call for Papers</h1>
                <p className='text'>
                    All submitted articles should report novel and unpublished research results on experimental or 
                    theoretical basis. Articles submitted to ViTECoN, 2023 should fall under any one domain mentioned below 
                    and must not be under consideration for publication elsewhere.
                </p>
                <div className='topics-container'>
                    <div className='topic'>
                        <h1 className='topic-heading'>ELECTRONICS ENGINEERING</h1>
                        <ul>
                            <li>Communication Circuits</li>
                            <li>RF, Analog and Mixed-Signal Circuits</li>
                            <li>Optoelectronic Circuits</li>
                            <li>Control Systems</li>
                            <li>VLSI/Embedded Systems</li>
                            <li>DSP Algorithms & Architectures</li>
                            <li>Logic Synthesis and Physical Design</li>
                            <li>Flexible Electronics / Wearable electronics</li>
                            <li>Instrumentation engineering / Biomedical instrumentation</li>
                            <li>Medical Electronics</li>
                            <li>Microelectronics</li>
                            <li>MEMS and Sensors Design</li>
                            <li>Low Power CMOS Design</li>
                            <li>System-on-Chip</li>
                            <li>Network-on-Chip</li>
                            <li>Electronic System Level Design</li>
                            <li>Device Simulation and Modeling</li>
                            <li>Testing and Reliability</li>
                            <li>Opto-Electronic Structures</li>
                            <li>Nano-technology</li>
                            <li>Photonic Devices</li>
                            <li>Nano-electronics</li>
                            <li>Nano-photonics</li>
                            <li>Smart seneors</li>
                        </ul>
                    </div>

                    <div className='topic'>
                        <h1 className='topic-heading'>COMMUNICATIONS ENGINEERING</h1>
                        <ul>
                            <li>Optical Communication</li>
                            <li>Satellite Communication</li>
                            <li>Microwave Communication</li>
                            <li>iMillimeter wave communication</li>
                            <li>Molecular Communication</li>
                            <li>Green Communication and Networking</li>
                            <li>Ultra Wide Band Communication</li>
                            <li>Grid and Cluster Computing</li>
                            <li>Wireless Sensor Networks / IoT / Big Data</li>
                            <li>Wireless Networks (4G/5G)</li>
                            <li>Mobile Ad-hoc Networks</li>
                            <li>Vehicular Ad-hoc Networks</li>
                            <li>Secure communications</li>
                            <li>Wireless Networks</li>
                            <li>Spectrum Management</li>
                            <li>Cognitive Radio Design</li>
                            <li>MIMO systems</li>
                            <li>Smart Grid Communication</li>
                        </ul>
                    </div>

                    <div className='topic'>
                        <h1 className='topic-heading'>MOBILE COMPUTING TECHNOLOGIES</h1>
                        <ul>
                            <li>Scientific Computing</li>
                            <li>High throughput Computing</li>
                            <li>Artificial Intelligence</li>
                            <li>Automated Software Engineering</li>
                            <li>Bioinformatics</li>
                            <li>Computer Architecture / Graphics</li>
                            <li>Network Security</li>
                            <li>Distributed Systems</li>
                            <li>Expert Systems</li>
                            <li>Grid Computing</li>
                            <li>Cloud Computing</li>
                            <li>DNA Computing</li>
                            <li>Virtual Reality</li>
                            <li>Health care Informatics</li>
                        </ul>
                    </div>

                    <div className='topic'>
                        <h1 className='topic-heading'>SIGNAL & IMAGE PROCESSING</h1>
                        <ul>
                            <li>Artificial Intelligence</li>
                            <li>Signal Processing for Communication</li>
                            <li>Image & Video Signal Processing</li>
                            <li>Medical Imaging</li>
                            <li>Image Forensic</li>
                            <li>Image Data Hiding and Cryptography</li>
                            <li>Pattern Analysis & Classification</li>
                            <li>Large Dimensional Signal Processing</li>
                            <li>Compressive Sensing</li>
                            <li>Statistical Signal Processing</li>
                            <li>Speech & Audio Processing</li>
                            <li>Biomedical Signal Processing</li>
                            <li>Optimization Techniques</li>
                            <li>Signal Processing for Big Data</li>
                            <li>Machine Learning and Optimization</li>
                        </ul>
                    </div>

                    <div className='topic'>
                        <h1 className='topic-heading'>NEXT GENERATION COMMUNICATION</h1>
                        <ul>
                            <li>Future-generation core and radio access networks for 5G communications</li>
                            <li>HetNets and Femtocells for Green Communication Networks</li>
                            <li>Millimetre wave and Terahertz for 5G</li>
                            <li>M2M, MTC, V2X, D2D, Advanced Relaying based 5G communication and networks</li>
                            <li>CoMP, and Cooperation</li>
                            <li>Optimization (including nature or bio-inspired) for 5G</li>
                            <li>software-defined networking, cloud computing, self-organization networks and network function virtualization for 5G Network</li>
                            <li>Internet of Things (IoT) for 5G and its Prospective applications</li>
                            <li>Cognitive radio, spectrum sharing and protocol design for 5G wireless systems</li>
                            <li>Interference management, awareness and energy efficiency aspects for 5G</li>
                            <li>Non-Orthogonal, Asynchronous Waveforms for Future Mobile Applications</li>
                            <li>Future modulation techniques such as filter band multi carrier (FBMC), universal filtered multicarrier (UFMC), generalized frequency division multiplexing (GFDM)</li>
                            <li>Distributed antennas, network coding, and advanced link/network adaptation techniques</li>
                            <li>Higher order Massive MIMO and multiuser communication for 5G</li>
                            <li>Advanced multiple access designs for 5G networks</li>
                            <li>Base station antenna design for 5G MIMO systems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallForPaper