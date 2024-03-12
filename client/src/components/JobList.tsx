import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
        <Box sx={{ 'padding': '20px' }}>
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

const tabsData = [
  { label: "Vizgen", index: 0 },
  { label: "Volta Labs", index: 1 },
  { label: "SharkNinja", index: 2 },
  { label: "Bosch", index: 3 },
];

const jobData = [
  { companyName: "Vizgen", jobTitle: "Sustaining Software Engineer", jobDuty1: "Built a GUI (Python) for our 30+ FSEs to run qualification protocols on commercial instruments in the field", jobDuty2: "Upgraded an out-of-date bioinformatics pipeline on AWS (Batch) by integrating a new internal analysis tool.", date: "May 2023 - October 2023" },
  { companyName: "Volta Labs", jobTitle: "Thermal Engineer", jobDuty1: "Built Python GUI that automated frequent temperature plotting and data entry tasks for research associates", jobDuty2: "Forked open source firmware and built thermal control features used at customer product deployments.", date: "June 2021 - April 2023" },
  { companyName: "SharkNinja", jobTitle: "R&D Engineer", jobDuty1: "Developed a consumer product from concept to UL/IEC safety certified and in manufacturing within 1.5 years", jobDuty2: "Designed and sourced fully integrated (EE, ME, SW) sheet metal prototypes of the product, tested performance, and iterated design for final product", date: "January 2020 - May 2021" },
  { companyName: "Bosch", jobTitle: "Mech-E Co-op", jobDuty1: "Wrote LabVIEW and MATLAB programs to monitor and analyze components (pumps, valves, heat exchangers, heaters)", jobDuty2: "Implemented LIN communication protocol in LABVIEW to enable testing of propriety valve and firmware.", date: "January - October 2019" },
];

const dynamicTabs = tabsData.map((tab, index) => (
  <Tab key={index} label={tab.label} {...a11yProps(tab.index)} />
));

const dynamicJobs = (value: any) => jobData.map((job, index) => (
  <TabPanel key={index} value={value} index={index}>
    <JobInfo
      companyName={job.companyName}
      jobTitle={job.jobTitle}
      jobDuty1={job.jobDuty1}
      jobDuty2={job.jobDuty2}
      date={job.date}
    />
  </TabPanel>
))


export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      className="main-page-container"
      maxWidth="md"
      sx={{'margin-top': {xs: 25, sm: 25}, 'margin-bottom': {xs: 75, sm: 0}}}
    >
    <Box 
      className="job-list-box"
      sx=
        {{ 
        display: { sm: 'flex', xs: 'none' },
        flexGrow: 1,
        bgcolor: '',
        minHeight: 'auto',
        height: 'auto',
        justifyContent: 'left',
        width: {sm: 'auto', md: 'auto'} 
        }}
      >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx=
        {{
          borderRight: 1,
          borderColor: 'divider',
          minWidth: '140px'
        }}
      >
        {dynamicTabs}
      </Tabs>
      {dynamicJobs(value)}
    </Box>
    <Box sx={{ display: { sm: 'none' }, flexGrow: 1, bgcolor: '', height: 1, 'justify-content': 'left', width: {sm: 500, md: 1000} }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      {dynamicTabs}
    </Tabs>
  </Box>
    {dynamicJobs(value)}
  </Box>
  </Container>
  );
}