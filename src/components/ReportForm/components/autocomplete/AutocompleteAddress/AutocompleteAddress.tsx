import React, {
  FC,
  useState,
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
import { IMarker } from 'components/ReportForm/types/IMarker';


interface IAddressInputProps {
  key?: number;
  value?: IMarker;
  onChange?: (state?: IMarker) => void;
  label?: string;
}

export const AutocompleteAddress: FC<IAddressInputProps> = ({ key, value, onChange, label }) => {
  const [address, setAddress] = useState<IMarker | null>(null);
  const [isPending, setPending] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);

  const handleAddressChange = (event: any) => {
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
    const exampleAddress = { title: 'г. Саратов, проспект Энтузиастов, 48', position: { lat: 51.497798, lng: 45.934364 } };
    setAddress(null);
    setPending(true);
    setTimeout(() => {
      setAddress(exampleAddress);
      setPending(false);
    }, 2000);
  };

  return (
    <FormControl fullWidth>
      <Autocomplete
        key={key}
        freeSolo
        options={SaratovAddresses}
        value={address}
        onChange={(event, value) => {
          // TODO: Не работает ничерта
          // @ts-ignore
          setAddress(value);
        }}
        open={open}
        onClose={() => setOpen(false)}
        renderOption={(value) => value.title}
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