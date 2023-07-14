import imgAttempted from '../images/thinking.png';
import imgDone from '../images/verified.png';


// function checkProblemExistence(solvedProblems, cid, idx) {

//     return false; // Problem not found
// }

// let solvedProblems = [];
export default function ProblemStatus(props) {
    // 0 = unsolved , 1 = solved , 2 = attempted but not solved
    // const [problemStatus, setProblemStatus] = useState(0);
    let problemStatus = 0;
    // const [solvedProblems, setSolvedProblems] = useState([]);


    // for (const item of solvedProblems) {
    //     if (item.problem.contestId === props.cid && item.problem.index === props.idx) {
    //         setProblemStatus(1);
    //     }
    //     console.log(item);
    // }
    
    return (
        <div>
            {problemStatus === 1 && <img className='status-image' src={imgDone} />}
            {problemStatus === 2 && <img className='status-image' src={imgAttempted} />}
        </div>
    );
}
