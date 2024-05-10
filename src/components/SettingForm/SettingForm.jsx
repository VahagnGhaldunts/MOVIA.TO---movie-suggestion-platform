import * as React from "react";
import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./style.module.css";
import "./style.css";
import { useState } from "react";

let SettingForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const [showPassword3, setShowPassword3] = React.useState(false);

  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);

  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };

  let [changeName, setChangeName] = useState(true);
  let [changeNikName, setChangeNikName] = useState(true);
  let [changeEmail, setChangeEmail] = useState(true);
  let [changePassword, setChangePassword] = useState(false);
  let [delAccount, setDelAccount] = useState(false);
  let [language, setLanguage] = useState(false);

  return (
    <>
      <section className={styles.SettingItem}>
        <div className={styles.main_container}>
          <div className={styles.item}>
            <div className={styles.userImg}>
              <b>J</b>
              <p className={styles.imgBox}>
                <SvgIcon iconName="icon_edit_max" />
              </p>
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.ChangeFormItem}>
              <div className={styles.NameDiv}>
                <div className={styles.boxNmChange}>
                  <h4>
                    Full Name{" "}
                    <span
                      onClick={(e) => {
                        setChangeName(!changeName ? true : false);
                      }}
                    >
                      <SvgIcon
                        iconName="icon_edit_min"
                        className={`${changeName ? styles.changeName : styles.changeName2}`}
                      />
                    </span>
                  </h4>
                  <p style={{ display: !changeName ? "none" : "flex" }}>John Smith</p>
                  <Box
                    style={{ display: changeName ? "none" : "flex" }}
                    className={styles.inputChangeName}
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "20ch", marginTop: "29px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-read-only-input"
                      label="Edit Full Name"
                      defaultValue=""
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </div>
                <div>
                  <h4>
                    Nickname{" "}
                    <span
                      onClick={(e) => {
                        setChangeNikName(!changeNikName ? true : false);
                      }}
                    >
                      <SvgIcon
                        iconName="icon_edit_min"
                        className={`${changeNikName ? styles.changeName : styles.changeName2}`}
                      />
                    </span>
                  </h4>
                  <p style={{ display: !changeNikName ? "none" : "flex" }}>SuperMen</p>
                  <Box
                    style={{ display: changeNikName ? "none" : "flex" }}
                    className={styles.inputChangeName}
                    component="form"
                    sx={{
                      "& > :not(style)": { width: "20ch", marginTop: "29px" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-read-only-input"
                      label="Edit Nickname"
                      defaultValue=""
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </div>
              </div>
              <div className={styles.NameDiv2}>
                <h4>
                  Email{" "}
                  <span
                    onClick={(e) => {
                      setChangeEmail(!changeEmail ? true : false);
                    }}
                  >
                    <SvgIcon
                      iconName="icon_edit_min"
                      className={`${changeEmail ? styles.changeName : styles.changeName2}`}
                    />
                  </span>
                </h4>
                <p className={styles.emailItem} style={{ display: !changeEmail ? "none" : "flex" }}>
                  <SvgIcon iconName="icon_email" /> nameusername@mail.ru
                </p>
                <Box
                  style={{ display: changeEmail ? "none" : "flex" }}
                  className={styles.inputChangeName}
                  component="form"
                  sx={{
                    "& > :not(style)": { width: "20ch", marginTop: "29px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-read-only-input"
                    label="New Email"
                    defaultValue=""
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <span
                  className={styles.changePasswordItem}
                  onClick={() => {
                    setChangePassword(true);
                  }}
                >
                  change password
                </span>
              </div>
            </div>
            {/* <div className={s.itemLanguage}>
            <h4>Language</h4>
            <div className={s.ItemEN}>
            <p
            onClick={() => {
              setLanguage(!language ? true : false);
            }}
            style={{
              borderRadius: !language ? "15px" : "none",
              padding: !language ? "1px 10px" : "none",
              backgroundColor: language ? "#808080af" : "#22d1cb00",
            }}
            >
            {" "}
            EN{" "}
            <span style={{ display: language ? "flex" : "none" }}>
            {" "}
            <SvgIcon iconName="icon_arrow_down" />
            </span>{" "}
            <span style={{ display: language ? "none" : "flex" }}>
            {" "}
            <SvgIcon iconName="icon_arrow_up" />
            </span>
            </p>
            <div className={s.ItemEnCategory} style={{ display: language ? "flex" : "none" }}>
            <p>Español(España)</p>
            <p>Rus(Russia)</p>
            <p>Português(Brasil)</p>
            <p>Español(España)</p>
            <p>Rus(Russia)</p>
            <p>Português(Brasil)</p>
            </div>
            </div>
          </div> */}
            <div className={styles.SignItem}>
              <span>
                <SvgIcon iconName="icon_sign_out" /> Sign Out
              </span>
              <p
                onClick={() => {
                  setDelAccount(true);
                }}
              >
                Delete Account
              </p>
            </div>
          </div>

          <div className={styles.ChangePasswordForm} style={{ display: !changePassword ? "none" : "flex" }}>
            <div className={styles.ChangePasswordBox}>
              <div className={styles.FormItem}>
                <h3>Change Password</h3>
                <Box sx={{ display: "flex", flexWrap: "wrap" }} className={styles.FormBoxPs}>
                  <FormControl sx={{ m: 1, width: "25ch" }} className={styles.itemEye}>
                    <InputLabel htmlFor="outlined-adornment-password">Exist Password</InputLabel>
                    <OutlinedInput
                      startAdornment={<InputAdornment position="start"></InputAdornment>}
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {!showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Exist Password "
                      defaultValue=""
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" className={styles.itemEye}>
                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                    <OutlinedInput
                      startAdornment={<InputAdornment position="start"></InputAdornment>}
                      id="outlined-adornment-password"
                      type={showPassword3 ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword3}
                            onMouseDown={handleMouseDownPassword3}
                            edge="end"
                          >
                            {!showPassword3 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="New Password"
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" className={styles.itemEye}>
                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                    <OutlinedInput
                      startAdornment={<InputAdornment position="start"></InputAdornment>}
                      id="outlined-adornment-password"
                      type={showPassword3 ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword3}
                            onMouseDown={handleMouseDownPassword3}
                            edge="end"
                          >
                            {!showPassword3 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="New Password"
                    />
                  </FormControl>
                </Box>
                <button
                  className={styles.btn}
                  onClick={() => {
                    setChangePassword(false);
                  }}
                >
                  <b>Save</b>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.AccountDelItem} style={{ display: !delAccount ? "none" : "flex" }}>
            <div className={styles.boxAccountDelItem}>
              <div className={styles.boxAccountDelItemChild}>
                <h3>Delete Your Account</h3>
                <p>
                  Deleting your account cannot be undone, please double check that you really want to delete this
                  account.
                </p>
                <div className={styles.delBtn}>
                  <button
                    className={styles.delBtnChild}
                    onClick={() => {
                      setDelAccount(false);
                    }}
                  >
                    <b>Delete</b>
                  </button>
                  <button
                    className={styles.delBtnChild2}
                    onClick={() => {
                      setDelAccount(false);
                    }}
                  >
                    <b>Cancel</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SettingForm;
