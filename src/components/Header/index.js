import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";

import { getSearchProduct } from "../../modules/Search";
import { HeaderWrapper, Logo, SearchBox, SearchSubBox } from "./style";
import logoImage from "./assets/logo.png";

class Header extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      searchWord: props.query
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (state.searchWord !== props.query) {
  //     return {
  //       searchWord: props.query
  //     };
  //   }
  // }

  changeWord = e => {
    this.setState(
      {
        searchWord: e.target.value
      },
      () => {
        this.debounceSearchQuery(this.state.searchWord);
      }
    );
  };

  debounceSearchQuery = debounce(searchWord => {
    this.props.getSearchProduct(searchWord, 1, true);
  }, 500);

  render() {
    const { searchWord } = this.state;
    return (
      <HeaderWrapper>
        <Logo src={logoImage} />
        <SearchBox>
          <SearchSubBox>
            <input
              name="searchBox"
              value={searchWord}
              placeholder="Cari di Tokopedia"
              onChange={this.changeWord}
            />
          </SearchSubBox>
        </SearchBox>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  query: search.query
});

export default connect(
  mapStateToProps,
  { getSearchProduct }
)(Header);
