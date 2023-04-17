import { useEffect, useState } from 'react';
import { getCities } from '@/functions';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
const Cities = ({
  setChoosenDistrictId,
  setChoosenLocation,
  setChooseCity,
  setLocation,
  location,
}: any) => {
  const [cities, setCities] = useState<any>();
  const { t } = useTranslation();

  useEffect(() => {
    getCities(setCities);
  }, []);
  const handleLocationChange = (event: any) => {
    const value = JSON.parse(event.target.value);

    const isDistrict = !value.isCity;

    isDistrict ? setChoosenDistrictId(value.CityId) : setChooseCity(value.Id);
    setChoosenLocation(isDistrict ? value.District : value.Name);
    setLocation(JSON.stringify(value));
  };
  const locationsOptionsMap = cities?.reduce((acc: any, curr: any) => {
    const isExist = acc.get(curr.Name);
    if (!isExist) {
      acc.set(curr.Name, [curr]);
    } else {
      acc.set(curr.Name, [...isExist, curr]);
    }
    return acc;
  }, new Map());
  const [width, setWidth] = useState<any>();
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [valueP, setValueP] = useState<any>(t('SearchBar2'));
  useEffect(() => {
    width >= 768 && width < 1024
      ? setValueP(t('SearchBar2Y'))
      : setValueP(t('SearchBar2'));
  }, [width]);
  return (
    <FormControl sx={{ minWidth: 210 }}>
      <InputLabel>{valueP}</InputLabel>
      <Select
        autoWidth
        label={t('Location')}
        value={location || ''}
        onChange={handleLocationChange}
        sx={{
          fieldset: {
            border: 'none',
          },
        }}
      >
        {locationsOptionsMap &&
          locationsOptionsMap.size &&
          Array.from(locationsOptionsMap)
            ?.reduce((acc: any[], [cityName, cityObjects]: any) => {
              const copyCityObjects = cityObjects.slice();
              const foundedCity = [...copyCityObjects].find(
                (city: any) => city.Name === cityName
              );
              cityObjects.unshift({
                isCity: true,
                CityId: foundedCity.CityId,
                Name: foundedCity.Name,
              });

              acc = [...acc, ...cityObjects];
              return acc;
            }, [])
            ?.map((cityObject: any) => {
              const value = JSON.stringify(cityObject);
              const label = cityObject.isCity
                ? cityObject.Name
                : cityObject.District;
              return (
                <MenuItem
                  sx={{
                    pl: !cityObject.isCity ? 5 : 3,
                  }}
                  key={value}
                  value={value}
                >
                  {label}
                </MenuItem>
              );
            })}
      </Select>
    </FormControl>
  );
};
export default Cities;
