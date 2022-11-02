import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

function AuthForm({ onSubmit, formFor }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e, formData)}>
      <Stack direction="column" spacing="1em">
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          onChange={onChange}
          required
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={onChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: "2em" }}
          disableElevation
        >
          {formFor}
        </Button>
      </Stack>
    </form>
  );
}

export default AuthForm;
