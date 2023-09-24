import classes from './Product.module.scss'

export default function Product({ name, image, price, category, description }){
    return (
        <>
        <div className={ classes.product_container }>
            <div className={ classes.image_box }>
                <img src={ image } />

                <div className={ classes.hidden_content }>
                    <div className={ classes.product_description }>
                        <p className={ classes.name }>{ name }</p>
                        <p>Category: { category }</p>
                        <p>{ description.slice(0, 200) + '...' }</p>
                    </div>
                </div>
            </div>
            <div className={ classes.product_info }>
                <p className={ classes.name }>{ name }</p>
                <h4>{ price ? `$${price}` : 'FREE' }</h4>
                <button>Add to Cart</button>
            </div>
        </div>
        </>
    );
}