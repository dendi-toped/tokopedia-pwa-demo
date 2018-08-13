import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { func, bool, arrayOf, object } from "prop-types";

import { getSearchProduct } from "../../../modules/Search";
import ProductCard from "../../../components/ProductCard";
import { ProductRow } from './style'

class SearchView extends Component {
  static propTypes = {
    getSearchProduct: func.isRequired,
    loading: bool.isRequired,
    data: arrayOf(object)
  };

  static defaultProps = {
    data: []
  };

  componentDidMount() {
    this.props.getSearchProduct("", 1);
  }

  render() {
    const { data, loading } = this.props;

    if (loading || data.length === 0) {
      return "Loading...";
    }

    return (
      <Fragment>
        {data.length > 0 &&
          data.map(product => {
            const { id, name, brand, price, imageUrl, codeitem } = product;

            return (
              <ProductRow>
                <ProductCard
                  id={id}
                  name={name}
                  brand={brand}
                  price={price}
                  imageUrl={imageUrl}
                  codeitem={codeitem}
                />
              </ProductRow>
            );
          })}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  loading: search.productRequest,
  data: search.product
});

export default connect(
  mapStateToProps,
  { getSearchProduct }
)(SearchView);
