import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import JobInfo from './JobInfo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
            className="main-page-container"
            maxWidth="md"
            sx={{'margin-top': {xs: 25, sm: 25}, 'margin-bottom': {xs: 75, sm: 100}}}
        >
    <Box
      className="job-list-box" sx={{ display: { sm: 'flex', xs: 'none' }, flexGrow: 1, bgcolor: '', 'min-height': '300px', height: 'auto', 'justify-content': 'left', width: {sm: 'auto', md: 'auto'} }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: '140px' }}
      >
        <Tab label="Volta Labs" {...a11yProps(0)} />
        <Tab label="Shark Ninja" {...a11yProps(1)} />
        <Tab label="Bosch TM4EV" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <JobInfo 
          companyName="Volta Labs"
          jobTitle="Thermal Engineer"
          jobDuty2="Developed node web app that allows a user to add, view, and search employees in a MySQL database"
          jobDuty3="Used React to create a filtered search box to elegantly display specific employee data."
          jobDuty1="Implemented a registration and login system that restricted permissions on certain pages in the application."/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JobInfo 
          companyName="SharkNinja"
          jobTitle="R&D Engineer"
          jobDuty2="Filler Data Is Here Right Now"
          jobDuty3="Filler Data Is Here Right Now"
          jobDuty1="Filler Data Is Here Right Now"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JobInfo 
          companyName="Bosch"
          jobTitle="Mech-E Co-op"
          jobDuty2="Filler Data Is Here Right Now"
          jobDuty3="Filler Data Is Here Right Now"
          jobDuty1="Filler Data Is Here Right Now"/>
      </TabPanel>
    </Box>
    <Box sx={{ display: { sm: 'none' }, flexGrow: 1, bgcolor: '', height: 1, 'justify-content': 'left', width: {sm: 500, md: 1000} }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Volta Labs" {...a11yProps(0)} />
      <Tab label="Shark Ninja" {...a11yProps(1)} />
      <Tab label="Bosch TM4EV" {...a11yProps(2)} />
    </Tabs>
  </Box>
  <TabPanel value={value} index={0}>
        <JobInfo 
          companyName="Volta Labs"
          jobTitle="Thermal Engineer"
          jobDuty2="Developed node web app that allows a user to add, view, and search employees in a MySQL database"
          jobDuty3="Used React to create a filtered search box to elegantly display specific employee data."
          jobDuty1="Implemented a registration and login system that restricted permissions on certain pages in the application."/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JobInfo 
          companyName="SharkNinja"
          jobTitle="Mechanical Engineer"
          jobDuty2="Filler Data Is Here Right Now"
          jobDuty3="Filler Data Is Here Right Now"
          jobDuty1="Filler Data Is Here Right Now"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <JobInfo 
          companyName="Bosch"
          jobTitle="Mech-E Co-op"
          jobDuty2="Filler Data Is Here Right Now"
          jobDuty3="Filler Data Is Here Right Now"
          jobDuty1="Filler Data Is Here Right Now"/>
      </TabPanel>
    </Box>

    </Container>
  );
}