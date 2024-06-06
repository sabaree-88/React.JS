import './style/Herosection.css'
const Herosection = () => {

    return <main className="hero-section">
        <div className="content">
            <h1
                className="air-max m-2">
                AIR MAX
            </h1>
            <h4
                className="title m-2">
                NIKE AIR MAX 90
            </h4>
            <h4
                className='price m-2'>
                $100
            </h4>
            <p
                className="text m-2">
                Nothing as fly, nothing as comfortable, nothing as proven-the Nike Air Max 90 stays true to its roots with the iconic waffle sole, stitched overlays and classic TPU accents.
            </p>
            <button
                className='add-to-cart m-2'>
                ADD TO CART
            </button>
        </div>
        <div className="hero-img">
            <img src="./image/Nike-Shoe 1.png" alt="shoe image" />
        </div>
    </main>
}

export default Herosection;