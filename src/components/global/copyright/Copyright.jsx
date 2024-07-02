import { Link, Typography } from "@mui/material";

export function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.linkedin.com/feed/?trk=cold_join_sign_in">
                Samuel Silva
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}