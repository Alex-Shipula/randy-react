import "./homeStyles.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { userActions, productCategoryActions,productActions } from "@actions";


import { IHomeComponentProps } from "./homeTypes";
import { HomeComponent } from "./homeComponent";

export const Home = connect(
  (state: IHomeComponentProps) => state,
  dispatch => bindActionCreators({ ...userActions, ...productCategoryActions,...productActions }, dispatch)
)(HomeComponent);

