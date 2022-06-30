import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function LabelBottomNavigation() {
  return (
    <Stack direction="row" justifyContent="center" divider={<Divider orientation="vertical" flexItem />} spacing={4}>
      <a href="https://www.linkedin.com/in/vincent-durham/"><LinkedInIcon /></a>
      <a href="https://github.com/vidurham"><GitHubIcon /></a>
      <a href="https://twitter.com/bulldurham_44"><InstagramIcon /></a>
      <a href="mailto:vdurham@prideseals.com"><EmailIcon /></a>
    </Stack>
  );
}