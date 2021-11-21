import React from "react";

const User = {
  firstName: "Prajwal",
  lastName: "Gangawane",
  isAutheticated: true
};

function Header() {
  const [UserInitials, setUserInitials] = React.useState("");

  React.useEffect(() => {
    setUserInitials(User.firstName.charAt(0) + User.lastName.charAt(0));
  }, [User]);

  return (
    <div>
      <header className="w3-bar" style={{ backgroundColor: "#1d8fbd" }}>
        <img
          className="w3-bar-item w3-left"
          src="https://candentech.com//assets/img/logo-light.svg"
          alt="CANDENT"
          width={75}
          height={75}
        />
        <span className="w3-bar-item w3-right">
          <div style={styles.avatarCirlce}>
            <span style={styles.avatarInitials}> {UserInitials} </span>
          </div>
        </span>
      </header>
      {/* <div
        className="w3-bar w3-top w3-large"
        style={{ "z-index": "2", "background-color": "#1d8fbd" }}
      >
        <span className="w3-bar-item w3-left">
          <img
            src="https://candentech.com//assets/img/logo-light.svg"
            alt="CANDENT"
          />
        </span>
        <span className="w3-bar-item w3-right">
          <div style={styles.avatarCirlce}>
            <span style={styles.avatarInitials}> {UserInitials} </span>
          </div>
        </span>
      </div> */}
    </div>
  );
}

export default Header;

const styles = {
  avatarCirlce: {
    backgroundColor: "lightgrey",
    borderRadius: "50%",
    height: 3.5 + "rem", // avatarSize
    textAlign: "center",
    width: 3.5 + "rem", // avatarSize
    alignItems: "center"
  },
  avatarInitials: {
    fontSize: 1.75 + "rem" /* 50% of avatarSize */,
    lineHeight: 1,
    position: "relative",
    top: 0.875 + "rem" /* 25% of avatarSize */,
    color: "purple",
    alignSelf: "center"
  }
};
