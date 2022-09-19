import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { CreateCoisaForm } from "../../CoisaForm/CreateCoisaForm";
import './CoisaForm.css';

export const CreateCoisa= (props) => {
  const [open, setOpen] = useState(false);
  const {userInfo, dateDay, sleepLength, setSleepLength, setAlertVisibility, setAlertUnsucessCreate } = props

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Coisa a Levar
      </Button>
      <Dialog open={open} onClose={handleClose}   >
        <DialogTitle>Create Sleep Activity</DialogTitle>
        <div className = "sleepform" style={{ padding: 20, overflow: "hidden" }}>
          <CreateCoisaForm 
          handleClose={handleClose} 
          userInfo = {userInfo} 
          dateDay = {dateDay} 
          sleepLength = {sleepLength} 
          setSleepLength = {setSleepLength}
          setAlertVisibility = {setAlertVisibility}
          setAlertUnsucessCreate = {setAlertUnsucessCreate}
        />
        </div>
      </Dialog>
    </div>
  );
};