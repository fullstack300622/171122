import './Item.css';
import DateTime from './DateTime';

function Item(props) {
    return (
        <div className='wrapper'>
            <h3>{props.title} </h3>
            <p>{props.amount} Nis</p>
            <DateTime date={props.date} time={props.time} />
        </div>
    )
}

export default Item;