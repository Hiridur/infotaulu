import Image from '../img/bg-image.jpg'
import '../styles/left.scss';
import Upcoming from './Upcoming';
import { render } from 'react-dom';

const TitleWrapper = (props) => (
    <div className='title-wrapper'>
        <div className='ongoing-text'>Current meeting</div>
        <div className='ongoing-title'>{props.title}</div>
        <div className='ongoing-time'>{props.time}</div>
        <div className='ongoing-author'>{props.author}</div>
        <div className='current-text'>
            Text
        </div>
    </div>
)

const Left = () => (
    <div className='current-next-wrapper'>
        <div/>
        <TitleWrapper title='tapahtumannimi' time='11:30' author='Herra Hakkarainen'/>
        <Upcoming/>
    </div>
)

//render(<)
export default Left;