
import octofitLogo from './octofitapp-small.png';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <div className="octofit-logo">
            <img src={octofitLogo} alt="OctoFit Logo" className="App-logo me-2" />
            <a className="navbar-brand" href="#">OctoFit Tracker</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome Card */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <h1 className="card-title display-5 mb-3 text-primary">Welcome to OctoFit Tracker</h1>
                <p className="card-text lead mb-4">
                  Track your fitness activities, join teams, compete on the leaderboard, and get personalized workout suggestions!
                </p>
                <a href="#" className="btn btn-primary btn-lg">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
