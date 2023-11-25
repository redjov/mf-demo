import React, {Suspense} from "react";
import { Container, createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";
import HybridInfo from "./HybridInfo";
const FlexInfo = React.lazy(() => import("flex/FlexInfo"));

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#0B5A53" },
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
                    <HybridInfo title='Hybrid in Hybrid' onClick={handleClick}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <FlexInfo title='Flex in Hybrid' onClick={handleClick} />
                    </Suspense>
                </Stack>
            </Container>
        </ThemeProvider>

    );
}
