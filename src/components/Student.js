import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, Button } from '@mui/material';

export default function Student() {

    const handleClick= (e) =>{
        e.preventDefault();
        const student = {name, email, password, phone, address}
        fetch("http://localhost:8080/student/add", {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        }).then(() =>{
            console.log("New student Has been added");
        });
        console.log(student);

    }
    const paperStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: "100px 0px",
        width: "90%",
        margin: "100px auto 30px",
        textAlign: 'center',
        alignItems: 'center',
    }
    const TextStyle = {
        margin: 10,
        padding: 50,
        width: "70%",
        textAlign: 'left',
        fontSize: "20px",
    }
    const Textfield = {
        padding: 5,
        margin: 10,
        width: "90%",
        textAlign: 'center'
    }
    const button = {
        left: "27vw",
        padding: 10,
        margin: 10,
        width: "100px",
        textAlign: 'center',
        backgroundColor: '#DC143C',
        color: 'white'
    }

    const [name, setStudentName] = React.useState('');
    const [email, setStudentEmail] = React.useState('');
    const [password, setStudentPassword] = React.useState('');
    const [phone, setStudentPhoneNumber] = React.useState('');
    const [address, setStudentAddress] = React.useState('');
    const [student, setStudent] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setStudent(result);
        }
        )
    }, [])
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: "100vw"},
      }}
      noValidate
      autoComplete="off"
    >
        {/* Form Field for Resgistering Student into the DataBase with Spring Boot Framework */}
            <Paper elevation={3} style={paperStyle}>
                <u><h1>Student Registration</h1></u>
                <TextField id="outlined-basic" label="Student Name" variant="outlined"fullWidth style={Textfield} 
                    value={name}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Email" variant="outlined" fullWidth style={Textfield}
                    value={email}
                    onChange={(e) => setStudentEmail(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Password" variant="outlined" fullWidth style={Textfield}
                    value={password}
                    onChange={(e) => setStudentPassword(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student PhoneNumber" variant="outlined" fullWidth style={Textfield}
                    value={phone}
                    onChange={(e) => setStudentPhoneNumber(e.target.value)}
                />
                <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth style={Textfield}
                    value={address}
                    onChange={(e) => setStudentAddress(e.target.value)}
                />
                <Button style={button} variant="contained" onClick={handleClick}>Submit</Button>
            </Paper>
        {/* </Container> */}

        <Paper elevation={3} style={paperStyle}>
            {student.map(student =>(
                <Paper elevation={6} style={TextStyle} key={student.id}>
                    Id: {student.id}<br />
                    Name: {student.name}<br />
                    Email: {student.email}<br />
                    PhoneNumber: {student.phone}<br />
                    Address: {student.address}
                </Paper>
            ))}
        </Paper>
    </Box>
  );
}
