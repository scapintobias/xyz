import React from "react";

import { ProjectList } from "../components/ProjectList";
import { ProjectFilters } from "../components/ProjectFilters";

export function Projects({ match }) {
  const { type } = match.params;
  return (
    <>
      <ProjectFilters type={type} />
      <ProjectList type={type} />
    </>
  );
}
