import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="container text-center">
            <h1>Achievement Hub</h1>

            <p>
              A centralized platform to celebrate and manage
              student achievements.
            </p>

            <button className="btn btn-primary">
              Explore Achievements
            </button>
          </div>
        </section>

        <section className="container py-5">
          <div className="text-center mb-4">
            <h2>Student Achievements</h2>
            <p className="text-muted">
              Celebrating our students who achieved excellence.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h3>🥇</h3>
                  <h5>First Place</h5>
                  <p className="text-muted">
                    Winners and outstanding achievements.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h3>🥈</h3>
                  <h5>Second Place</h5>
                  <p className="text-muted">
                    Students who secured second place.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <h3>🥉</h3>
                  <h5>Third Place</h5>
                  <p className="text-muted">
                    Students who secured third place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;