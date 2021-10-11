import SpendingOverview from '../components/spending-overview'
import Coupon from '../components/coupon'
import { customerData, insuranceData, couponsData } from '../utils/customer-data'
import moment from 'moment'

export default function Home() {
  let possibleSavings = 0,
    lifetimeSavings = 0;
  couponsData.forEach((coupon)=>{
    if(!coupon.claimed) possibleSavings += coupon.amount;
    else lifetimeSavings += coupon.amount;
  })
  return (
    <div className="row">
      <ul className="col-8 ps-slider">
        <li className="row owner-block">
          <div className="col-3">Welcome,
            <br/>
            <span className="h3">{customerData.owner.firstName}</span>
            <br/>
            <span className="small">Member since {moment(customerData.owner.joined).format('MM/DD/YYYY')}</span>
          </div>
          <div className="col-3">
            Today's Potential Savings
            <br />
            ${possibleSavings.toFixed(2)}
          </div>
          <div className="col-3">
            Your Lifetime Savings
            <br />
            ${lifetimeSavings.toFixed(2)}
          </div>
          <div className="col-3">
          The more actions you complete from the notifications below, the more you save!
          </div>
        </li>
        {couponsData.map((coupon, key)=>{
          return !coupon.claimed && <Coupon key={key} couponInfo={coupon} />
        })}
      </ul>
      <SpendingOverview insuranceData={insuranceData}/>
    </div>
  )
}