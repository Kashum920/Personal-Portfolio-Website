import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { FaEdit, FaComment, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
import { FaArrowRight, FaGraduationCap, FaPhoneVolume, FaLocationDot } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay} from 'swiper/modules';

const Home = () => {
  const [experienceCount, setExperienceCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Animation effect for counting without decimal point
  useEffect(() => {
    // Set individual intervals for each count
    const experienceInterval = setInterval(() => {
        if (experienceCount < 14) {
            setExperienceCount(experienceCount + 1);
        }
    }, 20);

    const projectsInterval = setInterval(() => {
        if (projectsCount < 50) {
            setProjectsCount(projectsCount + 1);
        }
    }, 15); 

    const clientsInterval = setInterval(() => {
        if (clientsCount < 5) {
            setClientsCount(prevCount => parseFloat((prevCount + Math.random() * 0.1).toFixed(1)));
        }
    }, 10);

    return () => {
        clearInterval(experienceInterval);
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
    };
  }, [experienceCount, projectsCount, clientsCount]);

  // active tabs 
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };

  const worksData = [
    { id: 1, title: "Project 1", category: "Apps", image: "images/portfolio-1.jpg", description: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "Project 2", category: "Branding", image: "images/portfolio-2.jpg", description: "Lorem ipsum dolor sit amet." },
    { id: 3, title: "Project 3", category: "UX/UI", image: "images/portfolio-3.jpg", description: "Lorem ipsum dolor sit amet." },
    { id: 4, title: "Project 4", category: "All", image: "images/portfolio-4.jpg", description: "Lorem ipsum dolor sit amet." },
    
  ];

  const swiperOptionsOne = {
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween:20,
        },
        991:{
          slidesPerView: 3,
          spaceBetween:20,
        },
        1380: {
          slidesPerView: 2,
          spaceBetween:20,
        },
        1500: {
          slidesPerView: 2,
          spaceBetween:20,
        }
    },
    loop:true,
  }; 

  return (
    <div>
        <Navbar/>
        <div className="counter">
            <div className="count-col">  
                <div className="count">{experienceCount}</div>
                <h4>Years of <br /> Experience</h4>
            </div>
            <div className="count-col">  
                <div className="count">{projectsCount}+</div>
                <h4>Project <br /> Completed</h4>
            </div>
            <div className="count-col">  
                <div className="count">1.{clientsCount}K</div>
                <h4>Happy <br /> Clients</h4>
            </div>
            <div className="count-col">  
                <div className="count">{experienceCount}</div>
                <h4>Years of <br /> Experience</h4>
            </div>
        </div>

        <div className='services'>
            <div className="title">
                <h2>My Quality Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid asperiores aperiam temporibus ducimus nisi.</p>
            </div>
            <div className="service-row">
                <div className="service-col">
                    <div className="topic">
                        <div className="num">01</div>
                        <h3>Branding Design</h3>
                    </div>
                    <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis repellat voluptate hic distinctio.</p>
                    <span><FaArrowRight /></span>
                </div>
                <div className="service-col">
                    <div className="topic">
                        <div className="num">02</div>
                        <h3>UI/UX Design</h3>
                    </div>
                    <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis repellat voluptate hic distinctio.</p>
                    <span><FaArrowRight /></span>
                </div>
                <div className="service-col">
                    <div className="topic">
                        <div className="num">03</div>
                        <h3>Web Design</h3>
                    </div>
                    <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis repellat voluptate hic distinctio.</p>
                    <span><FaArrowRight /></span>
                </div>
                <div className="service-col">
                    <div className="topic">
                        <div className="num">04</div>
                        <h3>App Design</h3>
                    </div>
                    <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut veritatis repellat voluptate hic distinctio.</p>
                    <span><FaArrowRight /></span>
                </div>
            </div>
        </div>

        <section className="works" id='works'>
          <div className="title">
            <h2>My Recent Works</h2>
          </div>
          <div className="buttons">
            <button onClick={() => handleTabClick('All')} className={activeTab === 'All' ? 'active' : ''}>All</button>
            <button onClick={() => handleTabClick('Apps')} className={activeTab === 'Apps' ? 'active' : ''}>Apps</button>
            <button onClick={() => handleTabClick('Branding')} className={activeTab === 'Branding' ? 'active' : ''}>Branding</button>
            <button onClick={() => handleTabClick('UX/UI')} className={activeTab === 'UX/UI' ? 'active' : ''}>UX/UI</button>
          </div>
          <div className="content">
                {/* Render images based on activeTab */}
                {worksData.map((work) => (
                    (activeTab === 'All' || activeTab === work.category) && (
                        <div className="image" key={work.id}>
                            <img src={work.image} alt={work.title} />
                            <div className="details">
                                <div className="topic">
                                    <h3>{work.title}</h3>
                                    <p>{work.description}</p>
                                </div>
                                <span><FaArrowRight /></span>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </section>

        <section className="qualify" id='resume'>
          <div className="qualify-one">
            <div className="topic">
              <span><FaEdit/></span>
              <h3>My Experience</h3>
            </div>
            <div className="box">
              <div className="year">2022-Present</div>
              <h4>lead development</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2021-2022</div>
              <h4>lead development</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2020-2021</div>
              <h4>lead development</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2018-2020</div>
              <h4>lead development</h4>
              <p>Blockdots, London</p>
            </div>
          </div>
          <div className="qualify-two">
            <div className="topic">
              <span><FaGraduationCap/></span>
              <h3>My Education</h3>
            </div>
            <div className="box">
              <div className="year">2022-Present</div>
              <h4>Programming Course</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2021-2022</div>
              <h4>Programming Course</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2020-2021</div>
              <h4>Programming Course</h4>
              <p>Blockdots, London</p>
            </div>
            <div className="box">
              <div className="year">2018-2020</div>
              <h4>Programming Course</h4>
              <p>Blockdots, London</p>
            </div>
          </div>
        </section>

        <section className="skills" id='skills'>
          <div className="title">
              <h2>My Skills</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aliquid asperiores aperiam temporibus ducimus nisi.</p>
          </div>
          <div className="skill-row">
            <div className="box">
              <div className="image">
                <img src="images/figma.png" alt="" />
                <div className="num">92%</div>
              </div>
              <div className="tool">Figma</div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/sketch.png" alt="" />
                <div className="num">80%</div>
              </div>
              <div className="tool">Sketch</div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/xd.png" alt="" />
                <div className="num">85%</div>
              </div>
              <div className="tool">XD</div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/wp.png" alt="" />
                <div className="num">99%</div>
              </div>
              <div className="tool">WordPress</div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/react.png" alt="" />
                <div className="num">88%</div>
              </div>
              <div className="tool">React</div>
            </div>
            <div className="box">
              <div className="image">
                <img src="images/js.png" alt="" />
                <div className="num">93%</div>
              </div>
              <div className="tool">JavaScript</div>
            </div>
          </div>
        </section>

        <section className='clients'>
            <div className="title">
              <h2>My Client's Stories</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus</p>
            </div>
              <Swiper
                watchSlidesProgress={true} 
                slidesPerView={2}   
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="myClients"
                {...swiperOptionsOne}
              >
                <SwiperSlide>
                  <div className="slide">
                    <div className="box">
                      <div className="company">
                        <img src="images/testi-logo-1.png" alt="" />
                      </div>
                      <img className='user' src="images/testi-1.jpg" alt="" />
                    </div>
                    <span></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt eos voluptate</p>
                    <h4>Tim Bailey</h4>
                    <span>SEO Specialist, Theme Junction</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <div className="box">
                      <div className="company">
                        <img src="images/testi-logo-2.png" alt="" />
                      </div>
                      <img className='user' src="images/testi-2.jpg" alt="" />
                    </div>
                    <span></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt eos voluptate</p>
                    <h4>Tim Bailey</h4>
                    <span>SEO Specialist, Theme Junction</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <div className="box">
                      <div className="company">
                        <img src="images/testi-logo-1.png" alt="" />
                      </div>
                      <img className='user' src="images/testi-1.jpg" alt="" />
                    </div>
                    <span></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt eos voluptate</p>
                    <h4>Tim Bailey</h4>
                    <span>SEO Specialist, Theme Junction</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <div className="box">
                      <div className="company">
                        <img src="images/testi-logo-2.png" alt="" />
                      </div>
                      <img className='user' src="images/testi-2.jpg" alt="" />
                    </div>
                    <span className='arrow'></span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique deserunt eos voluptate</p>
                    <h4>Tim Bailey</h4>
                    <span className='job'>SEO Specialist, Theme Junction</span>
                  </div>
                </SwiperSlide>
              </Swiper>
        </section>

        <section className="blogs" id='testimonials'>
          <div className="title">
            <h2>Recent Blogs</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos quis necessitatibus!</p>
          </div>
          <div className="blog-row">
            <div className="blog-box">
              <div className="image">
                <img src="images/blog-4.jpg" alt="" />
              </div>
              <div className="banner">technology</div>
              <div className="content">
                <div className="date">
                  <span><FaCalendarAlt />May 10,2024</span>
                  <span><FaComment />No Comments</span>
                </div>
                <h4>The Role Of Technology In Modern...</h4>
              </div>
            </div>
            <div className="blog-box">
              <div className="image">
                <img src="images/blog-3.jpg" alt="" />
              </div>
              <div className="banner">technology</div>
              <div className="content">
                <div className="date">
                  <span><FaCalendarAlt />May 10,2024</span>
                  <span><FaComment />No Comments</span>
                </div>
                <h4>The Role Of Technology In Modern...</h4>
              </div>
            </div>
            <div className="blog-box">
              <div className="image">
                <img src="images/blog-2.jpg" alt="" />
              </div>
              <div className="banner">technology</div>
              <div className="content">
                <div className="date">
                  <span><FaCalendarAlt />May 10,2024</span>
                  <span><FaComment />No Comments</span>
                </div>
                <h4>The Role Of Technology In Modern...</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <form action="">
            <div className="title">
              <h2>Let's work together!</h2>
            </div>
            <div className="box">
              <div className="input-box">
                <input type="text" placeholder='First name' />
              </div>
              <div className="input-box">
                <input type="text" placeholder='Last name' />
              </div>
            </div>
            <div className="box">
              <div className="input-box">
                <input type="text" placeholder='Email address' />
              </div>
              <div className="input-box">
                <input type="text" placeholder='Phone number' />
              </div>
            </div>
            <div className="input-box">
              <select>
                <option value="">--Please choose an option--</option>
                <option value="">Branding Design</option>
                <option value="">Web Design</option>
                <option value="">UI/UX Design</option>
                <option value="">App Design</option>
              </select>
            </div>
            <div className="text-box">
              <textarea row="5" placeholder='Message'></textarea>
            </div>

            <button>Send Message</button>
          </form>
          <div className="details">
            <div className="del-col">
                <i><FaPhoneVolume /></i>
                <div className="label">
                  <p>Phone</p>
                  <h6>+091 123 4567</h6>
                </div>
            </div>
            <div className="del-col">
                <i><FaEnvelope /></i>
                <div className="label">
                  <p>Email</p>
                  <h6>info@gmail.com</h6>
                </div>
            </div>
            <div className="del-col">
                <i><FaLocationDot /></i>
                <div className="label">
                  <p>Address</p>
                  <h6>Warne Park Street Pine, <br /> FL 33167,New York</h6>
                </div>
            </div>
          </div>
        </section>

        <section className="footer">
          <img src="images/logo-primary.png" alt="" />
          <div className="links">
            <a href="\#">Services</a>
            <a href="\#">Work</a>
            <a href="\#">Skills</a>
            <a href="\#">Experience</a>
            <a href="\#">Blog</a>
          </div>
          <p>&copy; 2024 All Right Reserved by CodeSlaves Design</p>
        </section>
    </div>
  )
}

export default Home