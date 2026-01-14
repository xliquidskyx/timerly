import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel>Language</InputLabel>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        label="Language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="pl">Polski</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
