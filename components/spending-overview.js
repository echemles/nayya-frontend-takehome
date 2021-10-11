import moment from 'moment';

export default function SpendingOverview(props) {
    const { healthInsurance, prescriptionInsurance, dentalInsurance } = props.insuranceData;

    return <aside className="col-4">
        <div className="spending-overview">
            <h2>My Spending Overview</h2>
            <div>
                <h3>Medical</h3>
                <dd>Total Deductible</dd>
                <dt>${healthInsurance.totalDeductible.toFixed(2)}</dt>
                <br/>
                <dd>Deadline</dd>
                <dt>{moment(healthInsurance.deadline).format('MM/DD/YYYY')}</dt>
                <br/>
                Total spent ${healthInsurance.totalSpent.toFixed(2)}
                <br/>
                <dd>Remaining</dd>
                <dt>${healthInsurance.totalDeductible - healthInsurance.totalSpent}</dt>
                <br/>
                <p>You <strong>{healthInsurance.totalSpent > healthInsurance.totalDeductible ? 'have' : 'have not' }</strong> reached the deductible or out-of-pocket maximum</p>
            </div>
        </div>
    </aside>
}