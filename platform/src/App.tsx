import { lazy, Suspense} from "react";
import { Container, createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";
const HybridInfo = lazy(() => import("hybrid/HybridInfo"));
const FlexInfo = lazy(() => import("flex/FlexInfo"));

const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#e60e2e" },
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
                    <Suspense fallback={<div>Loading...</div>}>
                        <HybridInfo title='Hybrid in Platform' onClick={handleClick}/>
                    </Suspense>
                    <Suspense fallback={<div>Loading...</div>}>
                        <FlexInfo title='Flex in Platform' onClick={handleClick} />
                    </Suspense>
                </Stack>
            </Container>
        </ThemeProvider>

    );
}
