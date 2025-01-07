import React, { useState, useEffect } from "react";
import MemberCard from "./MemberCard";

const MemberList = () => {
  // Here enter the details of team members and team names are dynamically allocated based on below entries
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Overall Co-ordinator",
      team: "Overall Co-ordinator",
      phone: "123-456-7890",
      email: "john@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Overall Co-ordinator",
      team: "Overall Co-ordinator",
      phone: "123-456-7891",
      email: "jane@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Head - Finance",
      team: "Finance",
      phone: "123-456-7892",
      email: "bob@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 4,
      name: "Alice Brown",
      role: "Head - WebDev",
      team: "Web-Dev",
      phone: "123-456-7893",
      email: "alice@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 5,
      name: "Charlie Davis",
      role: "Head - WebDev",
      team: "Web-Dev",
      phone: "123-456-7894",
      email: "charlie@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 6,
      name: "Dana White",
      role: "Head - Media and Coverage",
      team: "Media and Coverage",
      phone: "123-456-7895",
      email: "dana@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 7,
      name: "Eva Green",
      role: "Head - Media and Coverage",
      team: "Media and Coverage",
      phone: "123-456-7896",
      email: "eva@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 10,
      name: "Eva Green",
      role: "Head - Web-Dev",
      team: "Web-Dev",
      phone: "123-456-7896",
      email: "eva@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 8,
      name: "Eva Green",
      role: "Head - Sponsorship",
      team: "Sponsorship",
      phone: "123-456-7896",
      email: "eva@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
    {
      id: 9,
      name: "Eva Green",
      role: "Head - Sponsorship",
      team: "Sponsorship",
      phone: "123-456-7896",
      email: "eva@example.com",
      photo: "/aboutus/Team/dummy.png",
    },
  ];

  const [visibleMembers, setVisibleMembers] = useState(6);
  const [selectedTeam, setSelectedTeam] = useState("All Teams");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const teams = [
    "All Teams",
    ...new Set(teamMembers.map((member) => member.team)),
  ].sort();

  const toggleView = () => {
    setVisibleMembers(visibleMembers === 6 ? teamMembers.length : 6);
  };

  const filteredMembers = teamMembers.filter((member) =>
    selectedTeam === "All Teams" ? true : member.team === selectedTeam
  );

  const displayMembers = isMobile ? filteredMembers : teamMembers;

  return (
    <div>
      {/* Mobile-Only*/}
      <div className="block md:hidden px-4 mb-6">
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          className="w-full p-3 bg-[#141c23] text-white border border-[#40ec7b] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40ec7b] font-['Kodchasan']"
        >
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </select>
      </div>

      <div className="team-list">
        {displayMembers.slice(0, visibleMembers).map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>

      {filteredMembers.length > 6 && (
        <div className="button-container">
          <button className="view-more" onClick={toggleView}>
            {visibleMembers === 6 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberList;
