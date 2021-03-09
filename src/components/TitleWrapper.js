import '../styles/titleWrapper.scss';

const TitleWrapper = (props) => (
    <div className='title-wrapper'>
        <div className='ongoing-text'>Current meeting</div>
        <div className='ongoing-title'>{props.title}</div>
        <div className='ongoing-time'>{props.time}</div>
        <div className='ongoing-author'>{props.author}</div>

    </div>
)

export default TitleWrapper;