import React, {FC} from "react";
import {Button, Card, Stack, Typography} from "@mui/material";

interface FlexInfoProps {
    title?: string;
    onClick?: (message: string) => void;
}

const FlexInfo: FC<FlexInfoProps> = ({title, onClick}) => {

    const handleClick = () => {
        onClick?.(`Hello from ${title}!`);
    }
    return (
        <Card elevation={3} sx={{padding: 4}}>
            <Stack spacing={2}>
                <Typography variant='h3'>{title}</Typography>
                <Button color='primary' variant='contained' onClick={handleClick}>Click me!</Button>
            </Stack>
        </Card>
    );
};

export default FlexInfo;
