import React from 'react'
import { useParams } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2';
import countriesData from '../../data.json';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const StyledButton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  padding: "0.1rem",
  backgroundColor: theme.palette.background.default,
  border:"0.5px solid #0000002e",
  fontSize:"0.6rem",
  textTransform:"capitalize"
}));
const StyledButtonBack = styled(Button)(({ theme }) => ({
  color:'inherit',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor:theme.palette.background.paper,
 boxShadow:"-1px 1px 20px 0px rgb(0 0 0 / 3%)",
  textTransform:"capitalize",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  gap:"0.3rem",
  padding:"0.3rem 2rem"
}));
export default function ContriesDetails() {
    const params = useParams()
    const contriesName = params.contriesName
    const country = countriesData.find(
        (country) => country.name.toLowerCase() === contriesName.toLowerCase()
      );
    
      if (!country) {
        return <Typography variant="h6">Country not found</Typography>;
      }
      const getCountryName = (code) => {
        const countryData = countriesData.find(country => country.alpha3Code === code);
        return countryData ? countryData.name : code;
      };
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
          
          <Link to={'/'}> <StyledButtonBack ><ArrowBackIcon sx={{fontSize:"1rem"}} />Back</StyledButtonBack></Link>
    </Grid>
    <Grid
    container
    justifyContent="space-between"
    alignItems="center"
    flexDirection={{ xs: 'column', sm: 'row' }}
    spacing={1}
    sx={{ fontSize: '12px !important' ,p:"3rem 0" }}
    gap="1rem" >
       <Grid item xs={12} sm={5} container>
        <Box sx={{ display: 'flex', justifyContent: 'center' ,boxShadow: "-1px 1px 20px 0px rgb(0 0 0 / 3%)"}}>
          <img src={country.flags.svg} alt={`${country.name} flag`} style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} container>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
           <Grid container  spacing={2} margin="0">
            <Grid xs={12} sx={{p:"0"}}>
              <Typography variant="h5" fontWeight={800} >{country.name}</Typography>
            </Grid>
            <Grid xs={12} >
              <Grid container spacing={2} columns={16}>
               <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Native Name: 
                <Typography variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {country.name}
                    </Typography>
                </Typography>
                </Grid> 
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Top Level Domain: 
                <Typography variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {country.topLevelDomain}
                    </Typography>
                </Typography>
                </Grid> 
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Population: 
                <Typography variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {country.population}
                    </Typography>
                </Typography>
                </Grid>
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Currencies: 
                {country.currencies.map((currency, index) => (
                <Typography  key={index} variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {currency.code}       
                    </Typography>
                    ))}
                </Typography>
                </Grid> 
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Region: 
                <Typography variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {country.region}
                    </Typography>
                </Typography>
                </Grid> 
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Languages: 
                {country.languages.map((language, index) => (
        <Typography
          key={index}
          variant="caption"
          color="text.secondary"
          sx={{ p: "0 0.2rem", display: "inline-block" }}
        >
          {language.name}{index < country.languages.length - 1 && ', '}
        </Typography>
      ))}
                </Typography>
                </Grid>
                 <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Sub Region: 
                {country.regionalBlocs.map((bloc, index) => (
          <Typography
            key={index}
            variant="caption"
            color="text.secondary"
            sx={{ p: "0 0.2rem", display: "inline-block" }}
          >
            {bloc.name}{index < country.regionalBlocs.length - 1 && ', '}
          </Typography>
        ))}
                </Typography>
                </Grid> 
                <Grid item xs={8} sx={{p:"0"}}>
                <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Capital: 
                <Typography variant="caption" color="text.secondary"sx={{p:"0 0.2rem ",display:"inline-block"}}>
                    {country.capital}
                    </Typography>
                </Typography>
                </Grid>  
              </Grid>
            </Grid>
            <Grid xs={12} >
            <Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "600"}} >
                Border Countries: 
                <Grid container columnSpacing={1} gap="0.5rem" sx={{ order: { xs: 1, sm: 2 } }}>
                {country.borders && country.borders.length > 0 ? (
          country.borders.map((border, index) => (
            <Link to={`/${getCountryName(border)}`} key={index}>
            <StyledButton>
              {getCountryName(border)}
            </StyledButton>
          </Link>
          ))
        ) : (
          <StyledButton>
            Not Found
          </StyledButton>
        )}
                 </Grid>
                
                </Typography>
            </Grid>
            </Grid>
          <Box>
          
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
  )
}
