import classes from './Product.module.scss'

export default function Product({ name, image, price, category, description }){
    return (
        <>
        <div className={ classes.product_container }>
            <div className={ classes.product_container__image_box }>
                <img src={ image } />
            </div>
            <div className={ classes.product_container__product_info }>
                <p className={ classes.product_container__product_info__name }>{ name }</p>
                <h4>{ price ? `$${price}` : 'FREE' }</h4>
            </div>
            <button>Add to Cart</button>
        </div>
        </>
    );
}