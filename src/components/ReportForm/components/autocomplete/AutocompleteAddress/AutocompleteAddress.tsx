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
  const [open, setOpen] = React.useState(false);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length === 0) {
      if (open) setOpen(false);
    } else {
      if (!open) setOpen(true);
    }
    setAddress(value);
    onChange?.(value);
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
        onChange={(event, value) => {
          setAddress(value);
        }}
        open={open}
        onClose={() => setOpen(false)}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label || 'Адрес'}
            variant="outlined"
            fullWidth
            onInput={handleAddressChange}
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