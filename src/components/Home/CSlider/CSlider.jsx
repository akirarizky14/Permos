
import foto1 from '../../../assets/1.jpg'
import { Link } from 'react-router-dom'
import './CSlider.css'
function CSlider() {
    return (
        <div className="container-Slider">
            <img alt='tes' src={foto1}/>
            <Link to='/News' className="btn-slider">News</Link>
        </div>
    )
}

export default CSlider