import axios from "axios";
import React, { useCallback, useState } from "react";
import { Route } from "react-router";
import NewsPage from "./component/NewsPage";


const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  return <>
    <Route path="/:category?" component={NewsPage} />
  </>
}

export default App;