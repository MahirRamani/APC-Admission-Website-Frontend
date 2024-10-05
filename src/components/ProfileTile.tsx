import React from 'react';
import { Card, Box, Typography, Avatar, Chip } from '@mui/material';
import { School, LocationOn, Event, Flag } from '@mui/icons-material';

interface ProfileTileProps {
  id: number;
  imageUrl: string;
  name: string;
  degree: string;
  branch: string;
  villege_city: string;
  date_of_form_submitted: string;
  isDKSPermitted: boolean;
  onClick: (id: number) => void;
}

const ProfileTile: React.FC<ProfileTileProps> = ({
  id,
  imageUrl,
  name,
  degree,
  branch,
  villege_city,
  date_of_form_submitted,
  isDKSPermitted,
  onClick
}) => {
  return (
    <Card
      onClick={() => onClick(id)}
      sx={{
        backgroundColor: '#ffffff',
        width: '100%',
        border: '1px solid #e0e0e0',
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        mb: 1,
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transform: 'translateY(-2px)',
          borderColor: '#3f51b5',
        },
      }}
    >
      <Avatar
        src={imageUrl}
        sx={{
          width: 50,
          height: 50,
          borderRadius: 2,
          border: '2px solid #3f51b5',
        }}
      />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#3f51b5' }}>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <School fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            {degree} - {branch}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocationOn fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            {villege_city}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Event fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            {date_of_form_submitted}
          </Typography>
        </Box>
        {isDKSPermitted && (
          <Chip
            icon={<Flag fontSize="small" />}
            label="DKS Permitted"
            size="small"
            sx={{ 
              fontSize: '0.6rem', 
              height: 20, 
              bgcolor: '#e8f5e9', 
              color: '#4caf50',
              '& .MuiChip-label': { px: 1 },
            }}
          />
        )}
      </Box>
    </Card>
  );
};

export default ProfileTile;