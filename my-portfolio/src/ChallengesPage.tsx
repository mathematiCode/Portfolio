import challenges from '../challenges.json';
import Challenge from './Challenge';
import Navbar from './Navbar';

function ChallengesPage({}) {
  return (
    <>
      <Navbar />
      {challenges.map(challenge => {
        return <Challenge key={challenge.id} challenge={challenge} />;
      })}
    </>
  );
}

export default ChallengesPage;
