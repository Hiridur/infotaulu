import TitleWrapper from './TitleWrapper';
import Upcoming from './Upcoming';
import '../styles/left.scss';

const Left = () => (
    <div className='current-next-wrapper'>
        <div/>
        <TitleWrapper title='tapahtumannimi' time='11:30' author='Herra Hakkarainen'/>
        <Upcoming/>
    </div>
)

export default Left;