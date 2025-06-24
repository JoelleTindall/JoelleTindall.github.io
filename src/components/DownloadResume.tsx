import resume from '../assets/files/Resume.pdf'

interface Props {
  caption?: string;
}

const DownloadButton: React.FC<Props> = ({caption}) => {


  return (
    <>
      <a href={resume} download>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="24"
          height="24"
          viewBox="75 -875 800 800"
        >
          <path d="M160-80v-80h640v80zm320-160L200-600h160v-280h240v280h160zm0-130 116-150h-76v-280h-80v280h-76zm0-150" />
        <title>Download Resume</title>
        </svg>
        <figcaption>{caption}</figcaption>
      </a>
    </>
  );
};

export default DownloadButton;
