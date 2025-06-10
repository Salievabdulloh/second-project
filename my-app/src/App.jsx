import './App.css'
import horizontal from './assets/horrizontal.png'
import girl from './assets/girl.png'
import round from './assets/round.png'
import i from './assets/i.png'
import google from './assets/google.png'
import GoogleIcon from './assets/google-icon.png'
import indeed from './assets/indeed.png'
import paypal from './assets/paypal.png'
import square from './assets/square.png'
import adam from './assets/adam.png'
import maliha from './assets/maliha.png'
import rating from './assets/rating.png'
import colors from './assets/colors.png'
import group from './assets/group.png'
import arrow from './assets/arrow.png'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import img8 from './assets/8.png'
import dots from './assets/dots.png'
import two from './assets/two-people.png'
import play from './assets/play.png'
import quotes from './assets/quotes.png'
import stars from './assets/stars.png'
import pfp from './assets/pfp.png'
import pfp2 from './assets/pfp2.png'
import pfp3 from './assets/pfp3.png'
import dot from './assets/hor-dots.png'
import low from './assets/low.png'
import telegram from './assets/telegram.png'
import social from './assets/social.png'
import first from './assets/first.png'
import last from './assets/lasr.png'

function App() {
  return (
    <>
      <header>
        <img src={horizontal} className='hor' />
        <div className="">
          <div className="navbar">
            <h1>J<span>O</span>BPLY</h1>
            <ul>
              <li>Home</li>
              <li>Categories</li>
              <li>Service</li>
              <li>Jobs</li>
            </ul>
            <button>Post a Vacancy</button>
          </div>
          <div className="main-header">
            <div className="">
              <h1>Find & Apply For <br />
                Your Dream Job</h1>
              <p className='text'>The website is chockablock with useful features, allowing you to <br /> efficiently search and apply for roles across all sectors, <br /> experience levels and locations.</p>
              <div className="input-div">
                <input type="text" placeholder='Job title or Keyword' />
                <input type="text" placeholder='Location' />
                <button>Search</button>
              </div>
            </div>
            <div className="girl-div">
              <img src={girl} className='girl-img' />
              <img src={round} className='round-img' />
              <img src={round} className='round-img round2-img' />
              <img src={i} className='i' />
              <img src={google} className='google' />
              <img src={paypal} className='paypal' />
              <img src={square} className='square' />
              <div className='user-div'>
                <img src={adam} className='user-img' />
                <img src={rating} className='rating' />
                <p>Adam</p>
                <p>Project Manager</p>
              </div>
              <div className='user-div2'>
                <img src={maliha} className='user-img user2-img' />
                <img src={rating} className='rating' />
                <p>Adam</p>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className='section1'>
          <h1>Popular Job Posts</h1>
          <div className="companies-div">
            <div className="company">
              <div className="first">
                <img src={colors} />
                <p>Slack</p>
                <img src={group} height={40} />
              </div>
              <div className="second">
                <h3>Sr. Product Designer</h3>
                <p>Full Time - New York City</p>
              </div>
              <div className="third">
                <button>Remote</button>
                <button>Anywhere</button>
                <p>$10k - $25k</p>
              </div>
            </div>
            <div className="company">
              <div className="first">
                <img src={GoogleIcon} className='icon' />
                <p>Google</p>
                <img src={group} height={40} />
              </div>
              <div className="second">
                <h3>UX Researcher</h3>
                <p>Full Time - United States</p>
              </div>
              <div className="third">
                <button>Remote</button>
                <button>Anywhere</button>
                <p>$10k - $25k</p>
              </div>
            </div>
            <div className="company">
              <div className="first">
                <img src={indeed} className='icon' />
                <p>Indeed</p>
                <img src={group} height={40} />
              </div>
              <div className="second">
                <h3>Project Manager</h3>
                <p>Full Time - Singapore</p>
              </div>
              <div className="third">
                <button>Remote</button>
                <button>Anywhere</button>
                <p>$10k - $25k</p>
              </div>
            </div>
          </div>
          <div className="view-div">
            <p className='view'>View All</p>
            <img src={arrow} />
          </div>
        </section>
        <section className='section2'>
          <h1>Job Categories</h1>
          <div className="card-div">
            <div className="card">
              <img src={img1} className='images' />
              <p>Accouting & Finance</p>
              <p>125 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img2} className='images' />
              <p>UI/UX Design</p>
              <p>52 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img3} className='images' />
              <p>Content Writing</p>
              <p>150 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img4} className='images' />
              <p>Accouting & Finance</p>
              <p>125 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img5} className='images' />
              <p>Digital Marketing</p>
              <p>150 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img6} className='images' />
              <p>Technical Support</p>
              <p>350 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img7} className='images' />
              <p>Human Resource</p>
              <p>35 Job Vacancy</p>
            </div>
            <div className="card">
              <img src={img8} className='images' />
              <p>Art & Illustration</p>
              <p>52 Job Vacancy</p>
            </div>
          </div>
        </section>
        <section className='section3'>
          <img src={dots} className='dot-img' />
          <div className="new-job">
            <h1>Get Start New Job</h1>
            <p>create an account so you can get job <br /> information that suits you, and you can <br /> apply the salary your demand.</p>
            <button>Create an Account</button>
          </div>
          <img src={two} className='two' />
          <img src={dots} className='dot-img2' />

        </section>
        <section className='section4'>
          <img src={play} />
          <div className="postJob-div">
            <h1>Post a Job for <br />
              UX Designer</h1>
            <p>create an account so you can get job <br /> information that suits you, and you can <br /> apply the salary your demand.</p>
            <button>Post a Job</button>
          </div>
        </section>
        <section className='section5'>
          <h1>Great Feedback <br />
            From Candidates</h1>
          <div className="quotes-div">
            <div className="quote">
              <img src={quotes} alt="" />
              <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
              <div className="profile-div">
                <img src={pfp} />
                <div className="">
                  <p>Maria Jannat</p>
                  <p>Content Writer</p>
                  <img src={stars} />
                </div>
              </div>
            </div>
            <div className="quote">
              <img src={quotes} alt="" />
              <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
              <div className="profile-div">
                <img src={pfp2} />
                <div className="">
                  <p>Mithela</p>
                  <p>UI Designer</p>
                  <img src={stars} />
                </div>
              </div>
            </div>
            <div className="quote">
              <img src={quotes} alt="" />
              <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
              <div className="profile-div">
                <img src={pfp3} />
                <div className="">
                  <p>Adam</p>
                  <p>Developer</p>
                  <img src={stars} />
                </div>
              </div>
            </div>
          </div>
          <img src={dot} className="hor-dots" />
        </section>
        <section className='section6'>
          <div className="red-div">
            <h1>Subscribe to get
              update vacancy post</h1>
            <img src={low} className="low" />
            <input type="text" placeholder='infomail856@gmail.com' />
            <button>Subscribe <img src={telegram} alt="" /></button>
          </div>
        </section>
      </main>

      <footer>
        <div className="top-footer">
          <div className="first-footer">
            <h1>J<span>O</span>BPLY</h1>
            <p>152/3 , Western Road, New York</p>
            <p>Call Us: +99-8569-5234</p>
            <img src={social} alt="" />
          </div>
          <ul>
            <li className='special'>Explore</li>
            <li>Featured Job</li>
            <li>Recent Job Post</li>
            <li>Total Candidates</li>
            <li>Support</li>
          </ul>
          <ul>
            <li className='special'>Explore</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Company</li>
            <li>Contact Us</li>
          </ul>
          <div className="last-footer">
            <h2>Latest News</h2>
            <div className="">
              <img src={first} />
              <section>
                <p>Understanding the Cybersecurity <br /> Landscape in 2021</p>
                <p>21 June, 2021</p>
              </section>
            </div>
            <div className="">
              <img src={last} />
              <section>
                <p>How to Design for Maximum <br /> Product Trust</p>
                <p>21 June, 2021</p>
              </section>
            </div>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <p>Copyright 2021, All right reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
