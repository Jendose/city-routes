import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import {
  FormControl,
  Autocomplete,
  TextField,
} from '@mui/material';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';
import { RouteListByTransportType } from 'components/ReportForm/types/stubs/transport';

export interface IAutocompleteRouteProps {
  transportType: TransportTypes;
  value?: string;
  onChange?: (state?: string) => void;
}

export const AutocompleteRoute: FC<IAutocompleteRouteProps> = ({
  transportType, value, onChange,
}) => {
  const [text, setText] = useState<string | undefined>(value);
  const [autocompleteKey, setAutocompleteKey] = useState<number>(0);

  const handleChange = (event: any, value: any) => {
    setText(value);
    onChange?.(value);
  };

  useEffect(() => {
    setAutocompleteKey((prevKey) => prevKey + 1);
    onChange?.(undefined);
  }, [transportType]);

  return (
    <FormControl fullWidth>
      <Autocomplete
        key={autocompleteKey}
        id="autocomplete-route"
        options={RouteListByTransportType[transportType]}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id="route"
            label="Номер маршрута"
            variant="outlined"
            value={text}
          />
        )}
      />
    </FormControl>
  );
};
