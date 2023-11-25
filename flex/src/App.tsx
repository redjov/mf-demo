import React, {Suspense} from "react";
import {Container, createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";
import FlexInfo from "./FlexInfo";
const HybridInfo = React.lazy(() => import("hybrid/HybridInfo"));

const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#1976d2" },
    },
});

export const App = () => {

    const handleClick = (message: string) => {
        alert(message);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{padding: 4}}>
                <Stack spacing={4}>
                    <FlexInfo title='Flex in Flex' onClick={handleClick}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <HybridInfo title='Hybrid in Flex' onClick={handleClick}/>
                    </Suspense>
                </Stack>
            </Container>
        </ThemeProvider>

    );
}
