import React, { Component } from "react";

import { HeaderWrapper, Logo, SearchBox, SearchSubBox } from "./style";
import logoImage from "./assets/logo.png";

class Header extends Component {
  state = {
    searchWord: ""
  };

  changeWord = e => {
    this.setState({
      searchWord: e.target.value
    });
  };

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

export default Header;
