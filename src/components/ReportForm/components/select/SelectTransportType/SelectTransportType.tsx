import React, {
  FC,
  useState,
} from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  MenuItem,
} from '@mui/material';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';

export interface ISelectProblemTypeProps {
  value?: TransportTypes;
  onChange?: (state: TransportTypes) => void;
}

export const SelectTransportType: FC<ISelectProblemTypeProps> = ({
  value, onChange,
}) => {
  const [selected, setSelected] = useState<TransportTypes | undefined>(value);

  const handleChange = (event: SelectChangeEvent<TransportTypes>) => {
    setSelected(event.target.value as TransportTypes); // TODO: Избавиться от as
    onChange?.(event.target.value as TransportTypes);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-problem-type-label">Тип транспорта</InputLabel>
      <Select
        labelId="select-problem-type-label"
        label="Appliances"
        id="select-problem-type"
        value={selected}
        onChange={handleChange}
      >
        <MenuItem value={TransportTypes.BUS}>Автобус</MenuItem>
        <MenuItem value={TransportTypes.MINIBUS}>Маршрутка</MenuItem>
        <MenuItem value={TransportTypes.TROLLEYBUS}>Троллейбус</MenuItem>
        <MenuItem value={TransportTypes.TRAM}>Трамвай</MenuItem>
      </Select>
    </FormControl>
  );
};
