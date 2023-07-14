import imgAttempted from '../images/thinking.png';
import imgDone from '../images/verified.png';

// const API_URL = "https://codeforces.com/api/problemset.problems";

export default function ProblemStatus(props) {
    // const [problemsetData, setProblemsetData] = useState([]);

    // async function fetchProblemset(url) {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         // console.log(data);
    //         setProblemsetData(data.result);
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // }

    // useEffect(() => {
    //     fetchProblemset(API_URL);
    // }, []);

    return (
        <div>
            <img className='status-image' src={imgDone} />
            <img className='status-image' src={imgAttempted} />
        </div>
    );
}