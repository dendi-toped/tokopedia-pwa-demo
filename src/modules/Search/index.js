import createConstant from "../../helpers";

const PRODUCT = createConstant("@@search/GET_PRODUCT");

const initialState = {
  productRequest: true,
  productError: "",
  product: [],
  page: 1,
  total: 0,
  pagination: {
    next: null,
    prev: null,
    current: 1,
    perPage: 12
  }
};

export default (state = initialState, { result, type }) => {
  switch (type) {
    case PRODUCT.request:
      return {
        ...state,
        productRequest: true,
        productError: ""
      };
    case PRODUCT.failed:
      return {
        ...state,
        productRequest: false,
        productError: "",
        categoryDetail: null
      };
    case PRODUCT.success:
      return {
        ...state,
        productRequest: false,
        productError: "",
        product: result.data
        // total: result.data.length,
        // pagination: result.pagination
      };
    default:
      return state;
  }
};

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  mode: "cors"
};

export const getSearchProduct = (q, page) => dispatch => {
  dispatch({
    types: PRODUCT,
    promise: fetch(
      `https://peaceful-eyrie-66543.herokuapp.com/api/v1/search?q=${q}&page=${page}`,
      options
    )
  });
};
