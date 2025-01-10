import React from "react";
import Card from "../common/Card";
import { useLocation } from "react-router-dom";

const OrganizationLists = ({ organizations = [] }) => {
  // console.log("Organizations: ", organizations)
  const location = useLocation();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {organizations.map((organization) => (
        <Card
          key={organization.id}
          organizationName={organization.name}
          organizationImage={organization.image}
          link={`${location.pathname}/${organization.id}`}
          logoUrl={organization.logo_url}
        />
      ))}
    </section>
  );
};

export default OrganizationLists;
