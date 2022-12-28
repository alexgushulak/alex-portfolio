import '../App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MUIIcon from '@mui/material/Icon';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

type AppProps = {
    companyName: string
    jobTitle: string
    jobDuty1: string
    jobDuty2: string
    jobDuty3: string
};

export default function JobInfo({companyName, jobTitle, jobDuty1, jobDuty2, jobDuty3}: AppProps) {
    return (
        <div>
            <h4 className="job-header">{jobTitle} <span className="company-name-highlighted">&nbsp;@ {companyName}</span></h4>
            <List>
                <ListItem sx={{pl: '0px'}}>
                    <ListItemIcon sx={{minWidth: '30px', mb: '3px'}}>
                        < ArrowCircleRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={jobDuty1} />
                </ListItem>
                <ListItem sx={{pl: '0px'}}>
                    <ListItemIcon sx={{minWidth: '30px', mb: '3px'}}>
                        < ArrowCircleRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={jobDuty2} />
                </ListItem>
                <ListItem sx={{pl: '0px'}}>
                    <ListItemIcon sx={{minWidth: '30px', mb: '3px'}}>
                        < ArrowCircleRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={jobDuty3} />
                </ListItem>
            </List>
        </div>
    );
}