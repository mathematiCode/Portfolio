interface ChallengeProps {
  id: string;
  project: string;
  challenge: string;
  explanation: string;
  codeSnippet: string;
  example?: string;
}

function Challenge({ challenge }: { challenge: ChallengeProps }) {
  return <div>{challenge.challenge}</div>;
}

export default Challenge;
