import React, {
  FC,
  useState,
  useEffect,
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
    setSelected(event.target.value as TransportTypes);
    onChange?.(event.target.value as TransportTypes);
  };

  useEffect(() => {
    setSelected(value);
  }, [value])

  return (
    <FormControl fullWidth>
      <InputLabel id="select-problem-type-label">Тип транспорта</InputLabel>
      <Select
        labelId="select-problem-type-label"
        label="Тип транспорта"
        id="select-problem-type"
        value={selected || ''}
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
