
import React from 'react'
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Contries from './Contries';
import countriesData from '../../data.json';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:theme.palette.background.paper,
 boxShadow:"-1px 1px 20px 0px rgb(0 0 0 / 3%)",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: "-1px 1px 20px 0px rgb(0 0 0 / 3%)",
  width: '100%',
  outline :"none",
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  '& .MuiSelect-select': {
    padding: theme.spacing(1, 4),
    fontSize: '0.8rem',
    border: 'none',
    outline: 'none',
  },
  
  '& fieldset': {
    border: 'none',
  },
}));
export default function Home() {
  const [countries, setCountries] = React.useState([]);
  const [region, setRegion] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  React.useEffect(() => {
    setCountries(countriesData);
  }, []);

  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    const matchesSearchQuery = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesSearchQuery && matchesRegion;
  });

  return (
    <>
    
  <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px !important' }}
          gap="1rem"
        >
         
            <Search  sx={{ml:"0 !important"}}>
               <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
              sx={{fontSize:'0.8rem'}}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchChange}
              />
              </Search>
          
          <Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth sx={{padding:"0.5rem auto"}}>
        
      <StyledSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            onChange={handleRegionChange}
            displayEmpty
          >
          <MenuItem value="" disabled  >
                    Filter by Region
          </MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>

  </Grid>
  <Grid
          container spacing={4} justifyContent="start"
          sx={{ fontSize: '12px !important' ,p:"3rem 0" }}
          >
            {filteredCountries.map((country) => (
        <Grid xs={12} sm={6} md={4} lg={3} key={country.alpha3Code}>
          <Contries
            name={country.name}
            flagUrl={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        </Grid>
      ))}
  </Grid>
  </>
  )
}
