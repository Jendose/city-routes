import React, {
  FC,
  useState,
  ChangeEventHandler,
  useEffect,
} from 'react';
import {
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Autocomplete,
  TextField,
} from '@mui/material';
import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';
import { RouteListByTransportType } from 'components/ReportForm/types/stubs/transport';

export interface IAutocompleteRouteProps {
  transportType: TransportTypes;
  value?: string;
  onChange?: (state: string) => void;
}

export const AutocompleteRoute: FC<IAutocompleteRouteProps> = ({
  transportType, value, onChange,
}) => {
  const [text, setText] = useState<string | undefined>(value);

  const handleChange = (event: any) => {
    setText(event.target.value);
    onChange?.(event.target.value);
  };

  useEffect(() => {
    setText(value);
  }, [value])

  return (
    <FormControl fullWidth>
      <Autocomplete
        id="autocomplete-route"
        options={RouteListByTransportType[transportType]}
        renderInput={(params) =>
          <TextField
            {...params}
            id="route"
            label="Номер маршрута"
            variant="outlined"
            // TODO: Добавить onChange
            value={text}
            onChange={handleChange}
          />
        }
      />
    </FormControl>
  );
};
