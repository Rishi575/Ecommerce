import React from "react";

function LoginReg() {

    const handleSubmit = (event) => {

        event.preventDefault();

        if (!event.target.username.value || !event.target.email.value || !event.target.password.value) {
            alert("Please fill in all fields.");
            return;
        }else{
          alert("Form submitted successfully!");
        }

    };

  return (
    <div>
        <div className="container mt-5">

            <div className="text-center mb-4 bold fs-3">
              Login/Register
            </div>

            <form onSubmit={handleSubmit} className="form-group myt-3 color: red;">
                <div className="d-flex flex-column align-items-center">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" /> 
                </div>

                <div className="mt-3 d-flex justify-content-center">
                  <button className="btn btn-primary justify-content" type="submit">Register</button>
                </div>
            </form>


        </div>
    </div>
  );
}

export default LoginReg;