import React from 'react'
import CartIcon from '/images/icon-cart.svg'
export default function ProductCard({title, titleLang='en', smallImage, largeImage, category, description, price, fullPrice}) {
  return (
    <article className='product-card'>
        <figure className='product-card__image-container'>
            <img 
                className='product-card__image'
                src={smallImage} 
                alt={title}
                srcSet={`${smallImage} 560w, ${largeImage}`} 
            />
        </figure>
        <div className='product-card__body'>
            <div className='product-card__body--main'>
                <p className='category'>{category}</p>
                <h2 className='title' lang={titleLang}>{title}</h2>
                <p className='description'>{description}</p>
            </div>
            <div className='product-card__body--call-to-action'>
                <div className='call-to-action__price-section'>
                    <span className='sell-price'>{price}</span>
                    <span className='full-price'>{fullPrice}</span>
                </div>
                <button className='call-to-action__button'>
                    <img 
                        className='cart-icon'
                        src={CartIcon} 
                        alt="" />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    </article>

  )
}
