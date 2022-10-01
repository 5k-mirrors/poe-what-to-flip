import React from "react";
import PropTypes from "prop-types";
import { comparisons } from "../functions/config";
import { Comparison } from "./comparison";

export const Comparisons = ({ selectedLeague }) => {
  const comparisonsByGroup = comparisons();

  return (
    <div>
      {Object.keys(comparisonsByGroup).map(group => (
        <div key={group}>
          <h2>{group}</h2>
          <ul>
            {comparisonsByGroup[group].map((comparison, i) => (
              <Comparison
                selectedLeague={selectedLeague}
                comparison={comparison}
                key={i}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Comparisons.propTypes = {
  selectedLeague: PropTypes.string,
};
