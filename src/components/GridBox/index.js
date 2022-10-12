import './GridBox.css'

function GridBox({ variant }) {
    return (
        <div className={`grid__wrapper ${variant.column ? 'direct_col' : ''}`}>
            <div className='grid__item grid__item--1'></div>
            <div className='grid__item grid__item--2'></div>
            <div className='grid__item grid__item--3'></div>
            <div className='grid__item grid__item--4'></div>
            <div className='grid__item grid__item--5'></div>
            <div className='grid__item grid__item--6'></div>
        </div>
    )
};

export default GridBox;