import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { string, number, arrayOf, object } from "prop-types";

// Assets
import {
  CardContainer,
  CardImages,
  CardName,
  CardPrice,
  CardInfo,
  CardLink,
  BrandName
} from "./style";

class ProductCard extends PureComponent {
  render() {
    const { imageUrl, brand, name, price, slug } = this.props;

    return (
      <CardContainer>
        <Link
          onClick={this.handleProductClick}
          className={CardLink}
          to={`/p/${slug}`}
        >
          <img className={CardImages} alt={name} src={imageUrl} />
        </Link>
        <CardInfo>
          <Link
            onClick={this.handleProductClick}
            data-cy="prodNameLink"
            className={CardLink}
            to={`/p/${slug}`}
          >
            <CardName>{name}</CardName>
            <BrandName>{brand}</BrandName>
          </Link>
          <CardPrice>{`$ ${price}`}</CardPrice>
        </CardInfo>
      </CardContainer>
    );
  }
}

ProductCard.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  brand: string.isRequired,
  price: string.isRequired,
  imageUrl: string.isRequired,
  codeitem: string.isRequired,
  slug: string.isRequired,
  variant: arrayOf(object).isRequired
};

export default ProductCard;
