import challenges from '../challenges.json';
import Challenge from './Challenge';
import Navbar from './Navbar';

function ChallengesPage({}) {
  return (
    <>
      <Navbar />
      {challenges.map(challenge => {
        <Challenge challenge={challenge} />;
      })}
    </>
  );
}

export default ChallengesPage;
