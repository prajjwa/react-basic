import { calculateInvestmentResults } from "./util/investment";
import { formatter } from "./util/investment";
function Results({ inputValues }) {

    if (inputValues['Initial Investment'] === null || inputValues['Duration'] === null || inputValues['Expected Return'] === null
        || inputValues['Annual Investment'] === null) {
        return <></>;
    }

    const values = {
        initialInvestment: inputValues['Initial Investment'],
        annualInvestment: inputValues['Annual Investment'],
        expectedReturn: inputValues['Expected Return'],
        duration: inputValues['Duration']
    };

    const resultsData = calculateInvestmentResults(values);

    return (
        <div>
            <table id='result'>
                <thead>
                    <tr>
                        <th>Year </th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                {
                    resultsData.map((ele) => (
                        <tr>
                            <td>{ele.year}</td>
                            <td>{formatter.format(ele.valueEndOfYear)}</td>
                            <td>{formatter.format(ele.interest)}</td>
                            <td>{formatter.format(ele.annualInvestment)}</td>
                            <td>{formatter.format(inputValues['Initial Investment'])}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    );
}

export default Results;