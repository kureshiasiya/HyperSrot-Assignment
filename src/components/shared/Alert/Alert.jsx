import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { resetAlertAction } from "../../../actions/AlertActions";

const GlobalAlert = ({ alert, dispatch }) => {
  const { text = "", color = "" } = alert || {}; // Destructure alert with default values

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(resetAlertAction());
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch]);

  if (!text.trim()) {
    // Check if text is empty or contains only whitespace
    return null; // Return null if there's no meaningful text to display
  }
  return <Alert color={color}>{text}</Alert>;
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps)(GlobalAlert);
