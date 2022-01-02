import React, { Fragment, useState } from "react";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styled/Layouts";
import portfolios from '../data/portfolios.js';
import Menu from "../Components/Menu.js";
import Button from '../Components/Button.js';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))];

const PortfolioPage = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if(button === 'All'){
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter(item => item.category === button);
    setMenuItems(filteredData);
  };

  return <Fragment>
      <MainLayout>
        <Title title="Portfolios" span="Portfolios"></Title>
        <InnerLayout>
          <Button filter={filter} button={button}/>
          <Menu menuItem={menuItem}></Menu> 
        </InnerLayout>
      </MainLayout>
  </Fragment>
};

export default PortfolioPage;