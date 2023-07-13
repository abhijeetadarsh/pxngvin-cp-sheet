const fs = require('fs');

function urlRegexParser(problemURL) {
    const regex1 = /\/contest\/(\d+)\/problem\/([A-Z\d]+)$/;
    const regex2 = /\/problemset\/problem\/(\d+)\/([A-Z\d]+)$/;
    const match1 = problemURL.match(regex1);
    const match2 = problemURL.match(regex2);

    if (match1) {
        const contestId = match1[1];
        const index = match1[2];
        // return <ProblemItem cid={contestId} idx={index} />;
    }
    else if (match2) {
        const contestId = match2[1];
        const index = match2[2];
        // return <ProblemItem cid={contestId} idx={index} />;
    }
    else {
        console.log("Invalid URL format");
    }
    return <div>{problemURL}</div>
}

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }

    const jsonObject = JSON.parse(data);
    fs.readFile('problemset-problems.json', 'utf8', (err, data1) => {
        const jsonObject1 = JSON.parse(data1);

        for (let item1 of jsonObject1) {
            // console.log(item1.result.problems);
            for (let obj1 of item1.result.problems) {
                for (let item of jsonObject) {
                    // console.log(item.question.url);
                    for (let obj of item.question) {
                        if (obj.idx === obj1.index && obj.cid === obj1.contestId) {
                            obj.name = obj1.name;
                            obj.rating = obj1.rating;
                            console.log(obj);
                            break;
                        }
                    }
                    // console.log('------------------------');
                }
            }
            // console.log('------------');
        }
        const updatedJsonString = JSON.stringify(jsonObject);

        // Write the updated JSON back to the file
        fs.writeFile('data1.json', updatedJsonString, 'utf8', err => {
            if (err) {
                console.error('Error writing JSON file:', err);
                return;
            }
            console.log('JSON file updated successfully.');
        });
    });

    // Parse the JSON string into a JavaScript object

    // for (let item of jsonObject) {
    //     // console.log(item.question.url);
    //     for (let obj of item.question) {
    //         // console.log(obj.url);
    //         // const tmp = urlRegexParser(obj.url);
    //         // obj.cid = +tmp.cid;
    //         // obj.idx = tmp.idx;
    //         console.log(obj);
    //     }
    //     console.log('------------------------');
    // }

    // Convert the JavaScript object back to a JSON string

});
