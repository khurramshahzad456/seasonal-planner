import { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useTourQuery } from "../slices/apiSlice";
import "./tour.scss";
import { toast } from "react-toastify";

const Tour = () => {
  const [country, setCountry] = useState("");
  const [season, setSeason] = useState("");
  const [tossTrigger, setTossTrigger] = useState(false);
  const {
    data: tourDetail,
    isLoading,
    error,
  } = useTourQuery({ country, season }, { skip: !(country && season) });
  useEffect(() => {
    if (!isLoading) {
      if (error) {
        toast.error(error.status, {
          autoClose: 3000, // Close the toast after 3 seconds
        });
      } else if (tourDetail && tossTrigger) {
        toast.success(
          `${tourDetail.country} ${
            tourDetail.season
          } ${tourDetail.recommendations.join(" ")}`,
          {
            autoClose: 3000, // Close the toast after 3 seconds
          }
        );
        setTossTrigger(false);
      }
    }
  }, [tourDetail, isLoading, tossTrigger, error]);
  return (
    <Box className="container">
      <Typography mt={3} className="bold-text">
        {"Welcome Back!☀️"}
      </Typography>
      <Typography className="light-text" fontWeight={700} mt={1} mb={5}>
        {"Please enter your query to fetch a tour detail."}
      </Typography>
      <Formik
        initialValues={{ country: "", season: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.country) {
            errors.country = "Country is required";
          } else if (!/^[a-zA-Z]+$/.test(values.country)) {
            errors.country = "Invalid Country";
          }
          if (!values.season) {
            errors.season = "Season is required";
          } else if (!/^[a-zA-Z]+$/.test(values.season)) {
            errors.country = "Invalid Season";
          }
          return errors;
        }}
        onSubmit={(values) => {
          setCountry(values.country);
          setSeason(values.season);
          setTossTrigger(true);
        }}
      >
        {
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Field
                name="country"
                render={({ field, form }) => (
                  <TextField
                    {...field}
                    label="Country"
                    variant="outlined"
                    margin="normal"
                    style={{ width: "500px" }}
                    error={form.touched.country && form.errors.country}
                    helperText={form.touched.country && form.errors.country}
                  />
                )}
              />
              <Field
                name="season"
                render={({ field, form }) => (
                  <TextField
                    {...field}
                    label="Season"
                    variant="outlined"
                    margin="normal"
                    style={{ width: "500px" }}
                    error={form.touched.season && form.errors.season}
                    helperText={form.touched.season && form.errors.season}
                  />
                )}
              />
              <Stack alignItems="center" mt={3}>
                <Button type="submit" className="btn" variant="contained">
                  Submit
                </Button>
              </Stack>
            </Box>
          </Form>
        }
      </Formik>
    </Box>
  );
};

export default Tour;
