export const fetchSolvedProblems = async (props) => {
    const handle = props.handle;
    const setHandle = props.setHandle;
    const setStateOfForm = props.setStateOfForm;
    const setSolvedProblems = props.setSolvedProblems;
    const delay = 600; // Delay in milliseconds

    return new Promise((resolve) => {
        setTimeout(async () => {
            try {
                const response = await fetch(
                    `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=10000`
                );

                if (!response.ok) {
                    setHandle('');

                    // Change stateOfForm to invalidHandle mode
                    setStateOfForm(3);
                    throw new Error('Failed to fetch solved problems');
                }

                const data = await response.json();
                const solvedProblems = data.result.filter(
                    (submission) => submission.verdict === 'OK'
                );

                setSolvedProblems(solvedProblems);
                // console.log(solvedProblems);

                // Change stateOfForm to validHandle mode
                setStateOfForm(2);

                resolve(); // Resolve the promise after the delay and function execution
            } catch (error) {
                console.error('Error fetching solved problems:', error);
                resolve(); // Resolve the promise even if an error occurs
            }
        }, delay);
    });
};