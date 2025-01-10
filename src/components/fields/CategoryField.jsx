import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const CategoryField = ({ name, value, onChange, label = "Category" }) => {
  /**
   * - Fetch Categories
   * - Use Fetch
   */
  const { data, loading, error } = useFetch({
    url: `/categories`,
  });

  useEffect(() => {
    console.log("Rendering category...");
  }, []);

  if (loading) {
    return <FormControl fullWidth>Loading...</FormControl>;
  }

  // console.log(data);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        variant="outlined"
        name={name}
        value={value}
        label={label}
        onChange={onChange}
      >
        {data &&
          data.length > 0 &&
          data.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CategoryField;
