import PropTypes from "prop-types";

import Loader from "masterComponentsLibrary2/Loader";

const CircularLoader = ({ absolutePosition = false }) => {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...(absolutePosition
      ? {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "100vh",
        }
      : {}),
  };

  return <Loader loading={true} customStyle={loaderStyle} />;
};

CircularLoader.propTypes = {
  absolutePosition: PropTypes.bool,
};

export default CircularLoader;
