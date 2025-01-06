import React, { useState } from "react";
import Image from "next/image";

const MemberCard = ({ member }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="team-card"
      style={{
        width: "540px",
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        backgroundColor: "transparent",
      }}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      {!showInfo && (
        <div style={{ position: "relative", width: "100%", height: "70%" }}>
          <Image
            src={member.photo}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center top"
          />
        </div>
      )}

      {showInfo && (
        <div
          className="contact-info"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#FFFFFF",
            fontFamily: "Kodchasan, sans-serif",
            padding: "20px",
          }}
        >
          <p style={{ fontSize: "20px", margin: "0" }}>Email</p>
          <p style={{ fontSize: "20px", margin: "5px 0", color: "#40EC7B" }}>
            {member.email}
          </p>

          <div
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(64, 236, 123, 0) 2%, #FFFFFF 51%, rgba(64, 236, 123, 0) 100%)",
              margin: "10px 0",
            }}
          ></div>

          <p style={{ fontSize: "20px", margin: "0" }}>Contact Number</p>
          <p style={{ fontSize: "20px", margin: "5px 0", color: "#40EC7B" }}>
            {member.phone}
          </p>
        </div>
      )}

      {!showInfo && (
        <>
          <div
            className="team-member-name"
            style={{
              width: "100%",
              padding: "10px 0",
              fontFamily: "Kodchasan, sans-serif",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "41.6px",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            {member.name}
          </div>
          <div
            className="divider"
            style={{
              width: "100%",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(64, 236, 123, 0) 2%, #FFFFFF 51%, rgba(64, 236, 123, 0) 100%)",
            }}
          />
          <div
            className="team-member-role"
            style={{
              width: "100%",
              padding: "5px 0",
              fontFamily: "Kodchasan, sans-serif",
              fontSize: "24px",
              fontWeight: "500",
              textAlign: "center",
              color: "#40EC7B",
            }}
          >
            {member.role}
          </div>
        </>
      )}
    </div>
  );
};

export default MemberCard;
