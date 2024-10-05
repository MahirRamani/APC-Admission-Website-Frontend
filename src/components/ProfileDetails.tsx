import React, { useState } from 'react';
import { Box, Typography, Avatar, Chip, Divider, Paper, Button, TextField } from '@mui/material';
import { School, LocationOn, CalendarToday, Flag, Edit } from '@mui/icons-material';

interface ProfileDetailsProps {
  profile: {
    id: number;
    name: string;
    degree: string;
    branch: string;
    villege_city: string;
    imageUrl: string;
    date_of_form_submitted: string;
    isDKSPermitted: boolean;
  } | null;
  onUpdateProfile: (id: number, updates: Partial<ProfileDetailsProps['profile']>) => void;
  currentTab: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile, onUpdateProfile, currentTab }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  if (!profile) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="subtitle1" color="text.secondary">Select a profile to view details</Typography>
      </Box>
    );
  }

  const handleDKSPermit = () => {
    onUpdateProfile(profile.id, { isDKSPermitted: !profile.isDKSPermitted });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    if (editedProfile) {
      onUpdateProfile(profile.id, editedProfile);
      setIsEditing(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => prev ? { ...prev, [name]: value } : null);
  };

  return (
    <Paper elevation={0} sx={{ p: 3, height: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar
          src={profile.imageUrl}
          sx={{ width: 100, height: 100, mr: 3, border: '3px solid #3f51b5' }}
        />
        <Box>
          <Typography variant="h4" sx={{ color: '#3f51b5', mb: 1 }}>{profile.name}</Typography>
          <Chip
            icon={<School />}
            label={`${profile.degree} - ${profile.branch}`}
            sx={{ bgcolor: '#e8eaf6', color: '#3f51b5', mr: 1 }}
          />
          <Chip
            icon={<LocationOn />}
            label={profile.villege_city}
            sx={{ bgcolor: '#e8eaf6', color: '#3f51b5' }}
          />
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Academic Information</Typography>
      {isEditing ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Degree"
            name="degree"
            value={editedProfile?.degree || ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Branch"
            name="branch"
            value={editedProfile?.branch || ''}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            label="Village/City"
            name="villege_city"
            value={editedProfile?.villege_city || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <School color="action" />
            <Typography variant="body1">Degree: {profile.degree}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <School color="action" />
            <Typography variant="body1">Branch: {profile.branch}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn color="action" />
            <Typography variant="body1">Village/City: {profile.villege_city}</Typography>
          </Box>
        </Box>
      )}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Additional Information</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <CalendarToday color="action" />
        <Typography variant="body1">Form Submitted: {profile.date_of_form_submitted}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <Flag color={profile.isDKSPermitted ? "success" : "action"} />
        <Typography variant="body1">
          DKS Status: {profile.isDKSPermitted ? "Permitted" : "Not Permitted"}
        </Typography>
      </Box>
      {currentTab === 'DKS' && (
        <Button
          variant="contained"
          color={profile.isDKSPermitted ? "secondary" : "primary"}
          onClick={handleDKSPermit}
          startIcon={<Flag />}
          sx={{ mr: 2 }}
        >
          {profile.isDKSPermitted ? "Revoke DKS Permit" : "Grant DKS Permit"}
        </Button>
      )}
      {(currentTab === 'SMS' || currentTab === 'DKS') && (
        isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSave} startIcon={<Edit />}>
            Save Changes
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEdit} startIcon={<Edit />}>
            Edit Profile
          </Button>
        )
      )}
    </Paper>
  );
};

export default ProfileDetails;