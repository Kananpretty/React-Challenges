import { Link, useParams } from "react-router-dom";
import "./Challenge.css";
import challengesData from "../../data/challengesData";

const Challenge = () => {
  const { slug } = useParams();
  const challengeDetail = challengesData.find(
    (challenge) => challenge.slug === slug,
  );

  if (!challengeDetail) {
    return (
      <section className="challenge-page challenge-page--empty">
        <div className="challenge-page__empty-state">
          <p className="challenge-page__empty-label">Challenge unavailable</p>
          <h1>Challenge not found</h1>
          <p>
            The challenge you are looking for does not exist yet or may have
            been moved.
          </p>
          <Link to="/" className="challenge-page__empty-link">
            Back to all challenges
          </Link>
        </div>
      </section>
    );
  }

  const ChallengeComponent = challengeDetail.component;
  const previousChallenge = challengesData.find(
    (challenge) => challenge.id === challengeDetail.id - 1,
  );

  const nextChallenge = challengesData.find(
    (challenge) => challenge.id === challengeDetail.id + 1,
  );

  return (
    <section className="challenge-page">
      <header className="challenge-page__header">
        <Link to={"/"}>All Challenges</Link>
        <h1>Challenge #{challengeDetail.id}</h1>
      </header>
      <div className="challenge-page__details">
        <p>{challengeDetail.title}</p>
        <p>{challengeDetail.description}</p>
        <ul className="challenge-page__concepts">
          {challengeDetail.concepts.map((concept) => (
            <li key={concept} className="challenge-page__concept-tag">
              {concept}
            </li>
          ))}
        </ul>
      </div>
      <div className="challenge-page__requirements">
        <h2 className="challenge-page__requirements-title">Requirements</h2>
        <ul>
          {challengeDetail.requirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>
      </div>
      <section className="challenge-page__solution">
        <h2>Implementation</h2>
        <ChallengeComponent />
      </section>
      <div className="challenge-page__navigation">
        {previousChallenge ? (
          <Link
            to={`/challenges/${previousChallenge.slug}`}
            className="challenge-page__nav-link challenge-page__nav-link--prev"
          >
            ← Prev
          </Link>
        ) : (
          <span className="challenge-page__nav-spacer" aria-hidden="true" />
        )}

        {nextChallenge ? (
          <Link
            to={`/challenges/${nextChallenge.slug}`}
            className="challenge-page__nav-link challenge-page__nav-link--next"
          >
            Next →
          </Link>
        ) : (
          <span className="challenge-page__nav-spacer" aria-hidden="true" />
        )}
      </div>
    </section>
  );
};

export default Challenge;
