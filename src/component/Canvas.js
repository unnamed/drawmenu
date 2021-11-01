import Background from '../assets/pixels.svg';

export default function Canvas() {
    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: '45px', minHeight: '300px' }}>
        </div>
    );
}