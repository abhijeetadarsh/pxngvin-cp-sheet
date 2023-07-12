export default function ProblemList() {
    return <div>
        {ProblemList.map((item) => (
            <details>
                <summary className="bg-primary text-white p-2">{item.topic}</summary>
                <ol className="list-group list-group-numbered mt-2">
                    <div>
                        {item.question.map((questionItem) => (
                            <li className="list-group-item">
                                <a href={questionItem.url} target="_blank">{cfDataFetcher(questionItem.url)}</a>
                            </li>
                        ))}
                    </div>
                </ol>
            </details>
        ))}
    </div>;
}