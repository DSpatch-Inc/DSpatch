import { useState } from "react";
import { CircularProgress } from "@mui/material";
import React from "react";
import TextInput from "../../../components/input";
import Checkbox from "../../../components/CheckBox";
// Material imports
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider } from "@mui/material/styles";

import useStyles from "./styles";
import theme from "../../../assets/theme";
import { FooterLogo, LineDesign, WhatsAppLogo, DspatchWhiteLogo, SgnUpBike } from "../../../assets";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signInSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Full name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  password: Yup.string()
    .min(3, "Minimum 3 symbols")
    .max(50, "Maximum 50 symbols")
    .required("Password is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
  }),
});

const CustomerSignUp = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confrimPassword: "",
    isDefault: true,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: signInSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      console.log(values);
      resetForm();
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "gray" }} component='main' className={classes.wrapper}>
        <Grid container direction={{ xs: "column", md: "row" }} sx={{ minHeight: "100vh" }}>
          <Grid
            xs={6}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              backgroundColor: "#ffff",
              padding: "12px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                // height: "100%",
                height: "992px",
                backgroundColor: "#ffff",
                backgroundImage: `url(${SgnUpBike})`,
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  justifyContent: "start",
                  bottom: "0",
                  width: "100%",
                  minHeight: "375px",
                  padding: "12px 2.5rem",
                }}
              >
                <img
                  style={{
                    maxWidth: "190.86px",
                    marginBottom: "2rem",
                  }}
                  src={DspatchWhiteLogo}
                  alt=''
                />
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "700",
                    lineHeight: "53px",
                    maxWidth: "500px",
                    marginBottom: "2rem",
                  }}
                  variant='h3'
                  color='#FFFFFF'
                  mb={1.5}
                >
                  “Be your own boss and choose your own schedule”
                </Typography>
                <Box
                  sx={{
                    fontSize: "14px",
                    fontWeight: "700",
                    maxWidth: "232px",
                    height: "48px",
                    background: "#F2994A",
                    borderRadius: "3px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  variant='h3'
                  color='#FFFFFF'
                  mb={1.5}
                >
                  Sign up as a Fleet Owner
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs sx={{ backgroundColor: "#ffff", alignItems: "center", display: "flex" }}>
            <Container
              sx={{
                mx: { md: 5 },
                pt: { xs: 3, md: 3 },
                my: { xs: 5, md: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <img style={{ width: "225px", objectFit: "contain" }} src={FooterLogo} alt='logo' />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "48px",
                  fontWeight: "700",
                  lineHeight: "53px",
                }}
                variant='h3'
                color='#092C4C'
                mb={1.5}
              >
                Sign Up
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
                variant='body1'
                color='#092C4C'
                mb={{ xs: 3, md: 3 }}
              >
                Please fill out the below to create the account
              </Typography>

              <Box
                sx={{
                  maxWidth: "543px",
                  maxHeight: "54px",
                  background: "#25D366",
                  borderRadius: "3px",
                  margin: "0 auto",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 0",
                  marginTop: "4rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <img src={WhatsAppLogo} alt='' />
                  <Box
                    sx={{
                      marginLeft: "10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "22px",
                      }}
                    >
                      Sign up on
                    </span>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "28px",
                        marginTop: "-6px",
                      }}
                    >
                      Whatsapp
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "543px",
                  maxHeight: "54px",
                  margin: "1rem auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    background: "#828282",
                    height: "1.6px",
                    width: "100%",
                  }}
                ></div>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    color: "#828282",
                    margin: "0 14px",
                  }}
                >
                  or
                </Typography>
                <div
                  style={{
                    background: "#828282",
                    height: "1.6px",
                    width: "100%",
                  }}
                ></div>
              </Box>

              <Box
                sx={{
                  margin: "2rem 0",
                }}
              >
                <form
                  style={{
                    margin: "0 auto",
                    maxWidth: "543px",
                  }}
                  onSubmit={formik.handleSubmit}
                >
                  <Box>
                    <Box
                      sx={{
                        marginBottom: ".8rem",
                      }}
                    >
                      <TextInput
                        {...formik.getFieldProps("fullName")}
                        placeholder='Your Name'
                        label='Full Name or Business Name'
                        type='text'
                        name='fullName'
                      />
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        {formik.touched.fullName && formik.errors.fullName && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.fullName}</span>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: ".8rem",
                      }}
                    >
                      <TextInput
                        {...formik.getFieldProps("email")}
                        placeholder='Enter Email Address'
                        label='Email Address'
                        type='email'
                        name='email'
                      />
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        {formik.touched.email && formik.errors.email && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.email}</span>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: ".8rem",
                      }}
                    >
                      <TextInput
                        {...formik.getFieldProps("phoneNumber")}
                        placeholder='e.g+2347080702920'
                        label='Phone Number'
                        type='tel'
                        name='phoneNumber'
                      />
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                            }}
                          >
                            <span style={{ color: "red" }}>{formik.errors.phoneNumber}</span>
                          </Box>
                        )}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        marginBottom: ".8rem",
                      }}
                    >
                      <TextInput
                        name='password'
                        {...formik.getFieldProps("password")}
                        placeholder='***************'
                        label='Password'
                        type='password'
                      />
                      {formik.touched.password && formik.errors.password && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                          }}
                        >
                          <span style={{ color: "red" }}>{formik.errors.password}</span>
                        </Box>
                      )}
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        marginBottom: ".8rem",
                      }}
                    >
                      <TextInput
                        name='confirmPassword'
                        {...formik.getFieldProps("confirmPassword")}
                        placeholder='***************'
                        label='Confirm Password'
                        type='password'
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                          }}
                        >
                          <span style={{ color: "red" }}>{formik.errors.confirmPassword}</span>
                        </Box>
                      )}
                    </Box>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: "2rem",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "400",
                          fontSize: "20px",
                          color: "#092C4C",
                        }}
                      >
                        <Checkbox
                          id='status'
                          onChange={formik.handleChange}
                          name='isDefault'
                          {...formik.getFieldProps("isDefault")}
                          onClick={() => {}}
                        >
                          I acknowledge that I have read the{" "}
                          <span style={{ color: "#F2994A" }}>Privacy Policy</span> and have read the{" "}
                          <span style={{ color: "#F2994A" }}>Terms of </span>
                          Use for DSpatch before continuing.
                        </Checkbox>
                      </div>
                    </div>
                    <button
                      type='submit'
                      style={{
                        display: "inline-block",
                        width: "100%",
                        height: "55px",
                        background: "#092C4C",
                        borderRadius: "3px",
                        color: "#FFFFFF",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "28px",
                        cursor: "pointer",
                        marginBottom: "1rem",
                      }}
                    >
                      {loading ? <CircularProgress color='inherit' size={20} /> : "Next"}
                    </button>
                  </Box>
                </form>
              </Box>

              <Typography
                variant='body1'
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                }}
                color='#092C4C'
                mb={{ xs: 3, md: 10 }}
              >
                Already have a DSpatch account?{" "}
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to='/signin'
                >
                  <span
                    style={{
                      color: "#F2994A",
                      fontWeight: "700",
                      position: "relative",
                      paddingBottom: ".8rem",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                    <img
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                      }}
                      src={LineDesign}
                      alt=''
                    />
                  </span>
                </Link>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default CustomerSignUp;
