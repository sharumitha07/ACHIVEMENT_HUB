import { useNavigate } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* HEADER */}
      <header className="home-header">

        <div className="home-brand">
          <img
            src="/src/assets/rec-symbol.png"
            alt="REC"
            className="home-logo"
          />

          <span>ACHIEVEMENT HUB</span>
        </div>

        <nav className="home-nav">

          <button
            onClick={() => navigate('/student/dashboard')}
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate('/student/achievements')}
          >
            My Achievements
          </button>

          <button
            onClick={() => navigate('/student/profile')}
          >
            Profile
          </button>

        </nav>

      </header>


      {/* MAIN */}
      <main className="home-content">

        <section className="home-intro">

          <div>
            <span className="home-label">
              RAJALAKSHMI ENGINEERING COLLEGE
            </span>

            <h1>
              Student Achievement
              <br />
              Showcase
            </h1>

            <p>
              Celebrating the achievements and accomplishments
              of our students across events, competitions and
              academic activities.
            </p>
          </div>

        </section>


        {/* WINNERS */}
        <section className="showcase-section">

          <div className="showcase-heading">

            <div>
              <h2>Featured Achievements</h2>

              <p>
                Recognizing students who have achieved outstanding results.
              </p>
            </div>

          </div>


          <div className="achievement-showcase-grid">

            {/* 1ST PLACE */}
            <article className="showcase-card">

              <div className="position-badge first">
                1st Place
              </div>

              <div className="showcase-card-content">

                <h3>Student Name</h3>

                <span className="student-department">
                  Information Technology
                </span>

                <div className="achievement-info">
                  <strong>Hackathon Name</strong>

                  <span>
                    National Level · Team
                  </span>
                </div>

              </div>

            </article>


            {/* 2ND PLACE */}
            <article className="showcase-card">

              <div className="position-badge second">
                2nd Place
              </div>

              <div className="showcase-card-content">

                <h3>Student Name</h3>

                <span className="student-department">
                  Computer Science and Engineering
                </span>

                <div className="achievement-info">
                  <strong>Project Competition</strong>

                  <span>
                    State Level · Individual
                  </span>
                </div>

              </div>

            </article>


            {/* 3RD PLACE */}
            <article className="showcase-card">

              <div className="position-badge third">
                3rd Place
              </div>

              <div className="showcase-card-content">

                <h3>Student Name</h3>

                <span className="student-department">
                  Artificial Intelligence and Data Science
                </span>

                <div className="achievement-info">
                  <strong>Paper Presentation</strong>

                  <span>
                    National Level · Individual
                  </span>

                </div>

              </div>

            </article>


            {/* SPECIAL AWARD */}
            <article className="showcase-card">

              <div className="position-badge special">
                Special Award
              </div>

              <div className="showcase-card-content">

                <h3>Student Name</h3>

                <span className="student-department">
                  Electronics and Communication Engineering
                </span>

                <div className="achievement-info">
                  <strong>Technical Symposium</strong>

                  <span>
                    National Level · Team
                  </span>

                </div>

              </div>

            </article>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;