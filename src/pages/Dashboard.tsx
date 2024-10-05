import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Tabs, Tab, Avatar, IconButton, Divider } from '@mui/material';
import { Search, Person, School, AccountBalance, Event, Settings } from '@mui/icons-material';
import ProfileTile from '../components/ProfileTile';
import ProfileDetails from '../components/ProfileDetails';

const mockProfiles = [
  {
    id: 1,
    name: 'John Doe',
    degree: 'B.Tech',
    branch: 'Computer Science',
    villege_city: 'New York',
    imageUrl: '/placeholder.svg?height=60&width=60',
    date_of_form_submitted: '2023-05-15',
    isDKSPermitted: false
  },
  {
    id: 2,
    name: 'Jane Smith',
    degree: 'B.Sc',
    branch: 'Physics',
    villege_city: 'London',
    imageUrl: '/placeholder.svg?height=60&width=60',
    date_of_form_submitted: '2023-05-16',
    isDKSPermitted: true
  },
  {
    id: 3,
    name: 'Alice Johnson',
    degree: 'B.A',
    branch: 'English',
    villege_city: 'Paris',
    imageUrl: '/placeholder.svg?height=60&width=60',
    date_of_form_submitted: '2023-05-17',
    isDKSPermitted: false
  },
];

const AdmissionDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<typeof mockProfiles[0] | null>(null);
  const [profiles, setProfiles] = useState(mockProfiles);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setSelectedProfile(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleProfileClick = (id: number) => {
    const profile = profiles.find(p => p.id === id);
    setSelectedProfile(profile || null);
  };

  const handleUpdateProfile = (id: number, updates: Partial<typeof mockProfiles[0]>) => {
    setProfiles(prevProfiles =>
      prevProfiles.map(profile =>
        profile.id === id ? { ...profile, ...updates } : profile
      )
    );
    setSelectedProfile(prevProfile =>
      prevProfile && prevProfile.id === id ? { ...prevProfile, ...updates } : prevProfile
    );
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tabs = ['ALL', 'DKS', 'SMS', 'RJK', 'SUKHDIYO'];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', bgcolor: '#f0f4f8' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, borderBottom: '2px solid #3f51b5', bgcolor: '#ffffff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ width: 50, height: 50, mr: 2, bgcolor: '#3f51b5' }} src="/placeholder.svg?height=50&width=50" />
          <Box>
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>Admission Dashboard</Typography>
            <Typography variant="subtitle2" sx={{ color: '#757575' }}>Welcome, Admin</Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 1, borderColor: '#3f51b5' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[
              { label: 'Forms', icon: <School /> },
              { label: 'DKS', icon: <Person /> },
              { label: 'Acc', icon: <AccountBalance /> },
              { label: 'Events', icon: <Event /> },
              { label: 'Settings', icon: <Settings /> },
            ].map(({ label, icon }, index) => (
              <Button
                key={index}
                variant="contained"
                size="small"
                startIcon={icon}
                sx={{
                  bgcolor: '#3f51b5',
                  '&:hover': { bgcolor: '#303f9f' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ borderBottom: '1px solid #e0e0e0', bgcolor: '#ffffff' }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': { color: '#757575' },
            '& .Mui-selected': { color: '#3f51b5' },
            '& .MuiTabs-indicator': { backgroundColor: '#3f51b5' },
          }}
        >
          {tabs.map((label, index) => (
            <Tab key={index} label={label} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <Box sx={{
          width: 350,
          borderRight: '2px solid #3f51b5',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#ffffff',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
        }}>
          <Box sx={{ p: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Search profiles"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: <Search color="action" />,
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, overflow: 'auto', p: 1 }}>
            {filteredProfiles.map(profile => (
              <ProfileTile
                key={profile.id}
                {...profile}
                onClick={handleProfileClick}
              />
            ))}
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, overflow: 'auto', bgcolor: '#ffffff', borderLeft: '2px solid #3f51b5' }}>
          <ProfileDetails
            profile={selectedProfile}
            onUpdateProfile={handleUpdateProfile}
            currentTab={tabs[selectedTab]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdmissionDashboard;