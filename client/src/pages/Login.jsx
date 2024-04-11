import React, { useState } from 'react'
import { Container, Paper, Typography, Button, TextField } from '@mui/material'

const login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => { setIsLogin(false) };
    return (
        <Container component={"main"} maxWidth="xs" sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Paper
                elevation={3}
                sx={{
                    padding: "4",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                {isLogin ? (
                    //login......
                    <>
                        <Typography variant="h5">Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: '1rem',
                            padding: '1rem'
                        }}>
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin="normal"
                                variant="outlined"
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem"
                                }}
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >Login</Button>
                            <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                            <Button
                                variant="text"
                                onClick={toggleLogin}
                                fullWidth
                            >Sign In Instead</Button>

                        </form>
                    </>
                ) :
                    //register..........
                    <>
                        <Typography variant="h5">Login</Typography>
                        <form style={{
                            width: "100%",
                            marginTop: '1rem',
                            padding: '1rem'
                        }}>
                            <TextField
                                required
                                fullWidth
                                label="Username"
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type='password'
                                margin="normal"
                                variant="outlined"
                            />
                            <Button
                                sx={{
                                    marginTop: "1rem"
                                }}
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >Login</Button>
                            <Typography textAlign={'center'} m={'1rem'}>OR</Typography>

                            <Button
                                variant="text"
                                onClick={toggleLogin}
                                fullWidth
                            >Sign In Instead</Button>

                        </form>
                    </>

                }
            </Paper>
        </Container>
    )
}

export default login