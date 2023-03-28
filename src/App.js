import React, { useState } from "react";
import {
  Box,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";
import "./App.css";

const jsonData = [{}, {}, {}, {}, {}];
const processedData = jsonData.map((data) => {
  let res = {};
  res.name = data.name ? data.name : "Name";
  res.type = data.type ? data.type : "Text";
  res.displayType = data.displayType ? data.displayType : "TextField";
  res.hidden = data.hidden ? data.hidden : false;
  res.editable = data.editable ? data.editable : false;
  res.require = data.require ? data.require : false;
  res.displayName = data.displayName ? data.displayName : "Name";
  res.initialValue = data.initialValue ? data.initialValue : "Value";
  res.onLoad = data.onLoad ? data.onLoad : "JackFruit";
  return res;
});

function App() {
  // Model
  const [open, setOpen] = React.useState(false);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState("");

  const handleClickOpen = (index) => {
    setEditingIndex(index);
    setEditingValue(processedData[index].initialValue);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (editingIndex !== null && editingValue !== "") {
      const newData = [...formData];
      newData[editingIndex].initialValue = editingValue;
      setFormData(newData);
    }
    setEditingIndex(null);
    setEditingValue("");
  };

  // Handle inputs
  const [formData, setFormData] = useState(processedData);

  const handleInputChange = (event, index) => {
    const newData = [...formData];
    newData[index] = {
      ...newData[index],
      [event.target.name]: event.target.value,
    };
    setFormData(newData);
  };

  const handleCheckboxChange = (event, index) => {
    const newData = [...formData];
    newData[index] = {
      ...newData[index],
      [event.target.name]: event.target.checked,
    };
    setFormData(newData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = formData.map((item) => {
      return item;
    });
    console.log(JSON.stringify(newData));
  };
  return (
    <div className="App">
      <Box>
        <Container maxWidth="xl">
          <Typography variant="subtitle" component="h1" sx={{ mt: 2, mb: 2 }}>
            Race Type
          </Typography>
          <TableContainer component={Paper} sx={{ p: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" width="10%" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Name
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Type
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Display Type
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Hidden
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Editable
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Require
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Initial Value
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        On Load
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="8%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Validation
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell width="10%" align="center" style={{ padding: 1 }}>
                    <Box sx={{ border: "2px solid gray" }}>
                      <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
                        Display Name
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              {/* Table Body Content */}
              <TableBody>
                {formData.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell
                      width="10%"
                      align="center"
                      style={{ padding: 1 }}
                    >
                      <Box sx={{ border: "2px solid gray" }}>
                        <TextField
                          name="name"
                          placeholder="Name"
                          value={data.name}
                          onChange={(e) => handleInputChange(e, index)}
                          size="small"
                        />
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <Select
                          variant="standard"
                          name="type"
                          value={data.type}
                          onChange={(e) => handleInputChange(e, index)}
                        >
                          <MenuItem value="Text">Text</MenuItem>
                          <MenuItem value="Date">Date</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <Select
                          variant="standard"
                          name="displayType"
                          value={data.displayType}
                          onChange={(e) => handleInputChange(e, index)}
                          size="small"
                        >
                          <MenuItem value="TextField">TextField</MenuItem>
                          <MenuItem value="Date">Date</MenuItem>
                        </Select>
                      </Box>
                    </TableCell>
                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <Checkbox
                          variant="standard"
                          name="hidden"
                          checked={data.hidden}
                          onChange={(e) => handleCheckboxChange(e, index)}
                          size="small"
                        ></Checkbox>
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <Checkbox
                          variant="standard"
                          name="editable"
                          checked={data.editable}
                          onChange={(e) => handleCheckboxChange(e, index)}
                          size="small"
                        ></Checkbox>
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <Checkbox
                          variant="standard"
                          name="require"
                          checked={data.require}
                          onChange={(e) => handleCheckboxChange(e, index)}
                          size="small"
                        ></Checkbox>
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}>
                        <TextField
                          onClick={() => handleClickOpen(index)}
                          name="initialValue"
                          placeholder="Name"
                          value={data.initialValue}
                          onChange={(e) => handleInputChange(e, index)}
                          size="small"
                        />

                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Add Any value</DialogTitle>
                          <DialogContent>
                            <TextField
                              autoFocus
                              margin="dense"
                              name="initialValue"
                              placeholder="Name"
                              value={editingValue}
                              onChange={(e) => setEditingValue(e.target.value)}
                              size="small"
                              fullWidth
                              variant="standard"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Add</Button>
                          </DialogActions>
                        </Dialog>
                      </Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}></Box>
                    </TableCell>

                    <TableCell width="8%" align="center" style={{ padding: 1 }}>
                      <Box sx={{ border: "2px solid gray" }}></Box>
                    </TableCell>

                    <TableCell
                      width="10%"
                      align="center"
                      style={{ padding: 1 }}
                    >
                      <Box sx={{ border: "2px solid gray" }}>
                        <TextField
                          name="displayName"
                          placeholder="Name"
                          value={data.displayName}
                          onChange={(e) => handleInputChange(e, index)}
                          size="small"
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant={"outlined"}
              onClick={handleSubmit}
              sx={{
                mt: 1,
                background: "gray",
                color: "white",
                border: "1px solid #101010",
              }}
            >
              Submit
            </Button>
          </TableContainer>
        </Container>
      </Box>
    </div>
  );
}

export default App;
