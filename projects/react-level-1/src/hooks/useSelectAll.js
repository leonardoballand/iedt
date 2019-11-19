import { useState, useEffect } from "react";

/**
 *  Hook which returns a boolean status, and update it-self
 *  when passed dep changes
 *
 * @param {array} data - Used as a useEffect dep
 * @param {string} key - Key to check in dep
 * @returns {boolean, function}
 */
export default function useSelectAll(data, key) {
  const [selectAll, setSelectAll] = useState(false);

  // On dep changes, check for every item status
  useEffect(() => {
    function isAllChecked() {
      if (data.every(checkbox => checkbox[key])) {
        setSelectAll(true);
      }
    }

    function isAnyUnchecked() {
      if (data.some(checkbox => !checkbox[key])) {
        setSelectAll(false);
      }
    }

    isAllChecked();
    isAnyUnchecked();
  }, [data, key]);

  return { selectAll, setSelectAll };
}
