import React from 'react';
import BaseFormPage from './BaseFormPage';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { useForm } from './formData';

const InterviewTimelineSelectionPage: React.FC = () => {
  const [, updateFormData] = useForm(); // Retrieve the updateFormData function from the useForm hook
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleOptionSelection = (option: string) => {
    setSelectedOption(option);
    updateFormData({ interviewTimeline: option }); // Update the form data
  };

  return (
    <BaseFormPage currentPage={2} totalPages={4}>
      <h2>Interview Timeline Selection</h2>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '120px',
            height: '120px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedOption === 'No Interview' ? '#dcdcdc' : blueGrey[500],
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#dcdcdc',
            },
          }}
          onClick={() => handleOptionSelection('No Interview')}
        >
          <span>No Interview</span>
        </Button>

        <Button
          variant="contained"
          sx={{
            width: '120px',
            height: '120px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: selectedOption === 'Interview Coming Up' ? '#dcdcdc' : blueGrey[500],
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: '#dcdcdc',
            },
          }}
          onClick={() => handleOptionSelection('Interview Coming Up')}
        >
          <span>Interview Coming Up</span>
        </Button>
      </Box>
    </BaseFormPage>
  );
};

export default InterviewTimelineSelectionPage;
