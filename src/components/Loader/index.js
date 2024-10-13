// import SettingsIcon from "@material-ui/icons/Settings";
import SettingsIcon from "@mui/icons-material/Settings";

const Loader = () => {
  return (
    <>
      <h2
        style={{
          color: "gray",
          "padding-top": "3em",
        }}
      >
        Loading...
      </h2>
      <SettingsIcon
        style={{
          fontSize: 200,
          "min-height": "60vh",
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "justify-content": "center",
          margin: "auto",
          color: "darkcyan",
        }}
        className="App-logo"
        alt="logo"
      />
    </>
  );
};

export default Loader;
