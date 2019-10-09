import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { addFeature, removeFeature } from "./actions/action";
import { connect } from "react-redux";

const App = ({ state, addFeature, removeFeature }) => {
  const remover = item => {
    removeFeature(item);
  };

  const adder = item => {
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} remover={remover} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.additionalFeatures} adder={adder} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  { addFeature, removeFeature }
)(App);
