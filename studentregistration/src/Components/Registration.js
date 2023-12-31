import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../Redux/Api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration() {
  const dispatch = useDispatch();

  const [regData, setRegData] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleReg = () => {
    const data = {
      Name: name,
      Email: email,
      Password: password,
      PhoneNo: phone,
      IsActive: 1,
      IsAproved: 0
    };
    dispatch(registerStudent(data));
    if (registrationStatusCode === 200) {
      toast.success(registartionMessage);
    } else {
      toast.error(registartionMessage);
    }
  };

  const registrationData = useSelector((state) => state);
  const registartionMessage = useSelector(
    (state) => state?.RegistrationData?.data?.statusMessage
  );
  const registrationStatusCode = useSelector(
    (state) => state?.RegistrationData?.data?.statusCode
  );
  const registrationLoading = useSelector((state) => state.RegistrationLoading);

  console.log("registartionMessage", registrationStatusCode);
  return (
    <>
      <ToastContainer />

      <section class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              class="form-control"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example1c">
                              Your Name <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              class="form-control"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example3c">
                              Your Email <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example4c">
                              Password <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              class="form-control"
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                            <label class="form-label" for="form3Example4cd">
                              Mobile Number{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          {registrationLoading ? (
                            <button
                              class="btn btn-primary"
                              type="button"
                              disabled>
                              <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"></span>
                              Loading...
                            </button>
                          ) : (
                            <button
                              type="button"
                              class="btn btn-primary btn-lg"
                              onClick={handleReg}>
                              Register
                            </button>
                          )}
                        </div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to="login">
                            <p>Already Have An Account Log in </p>
                          </Link>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid"
                        alt="Sampleimage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
