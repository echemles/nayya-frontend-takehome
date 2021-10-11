import moment from 'moment';

export default function Coupon(props){
    const { created, type, heading, owner, textHTML, ctaHTML, amount } = props.couponInfo;
    
    return <li className="row swiper-slide">
        <div className="col-2">
            {heading}
            <br/>
            <span className="h1">${amount}</span>
        </div>
        <div className="col-8">
            {owner.firstName}
            <br/>
            {textHTML}
        </div>
        <div className="col-2">
            <span className="error">{moment(created).fromNow()}</span>
        </div>
    </li>
}