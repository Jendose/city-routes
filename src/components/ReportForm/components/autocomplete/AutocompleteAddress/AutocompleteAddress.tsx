import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import {
  Autocomplete,
  TextField,
  IconButton,
  FormControl,
  CircularProgress,
} from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { SaratovAddresses } from 'components/ReportForm/types/stubs/addresses';


interface IAddressInputProps {
  key?: number;
  value?: string;
  onChange?: (state?: string) => void;
  label?: string;
}

export const AutocompleteAddress: FC<IAddressInputProps> = ({ key, value, onChange, label }) => {
  const [address, setAddress] = useState<string | null>('');
  const [isPending, setPending] = useState<boolean>(false);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    onChange?.(event.target.value);
  };

  const handleLocateClick = () => {
    const exampleAddress = 'г. Саратов, проспект Энтузиастов, 48';
    setAddress('');
    setPending(true);
    setTimeout(() => {
      setAddress(exampleAddress);
      setPending(false);
    }, 3000);
  };

  return (
    <FormControl fullWidth>
      <Autocomplete
        key={key}
        freeSolo
        options={SaratovAddresses}
        value={address}
        onChange={(event, value) => setAddress(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label || 'Адрес'}
            variant="outlined"
            fullWidth
            onChange={handleAddressChange}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isPending ? (
                    <CircularProgress sx={{ marginBottom: '0' }}/>
                  ) : (
                    <>
                      <IconButton onClick={handleLocateClick}>
                        <MyLocationIcon/>
                      </IconButton>
                      {params.InputProps.endAdornment}
                    </>
                  )}
                </>
              ),
            }}
          />
        )}
      />
    </FormControl>
  );
};