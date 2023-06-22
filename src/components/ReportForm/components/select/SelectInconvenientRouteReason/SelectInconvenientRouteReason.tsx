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
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';
export interface ISelectProblemTypeProps {
  value?: InconvenientRouteReasons;
  onChange?: (state: InconvenientRouteReasons) => void;
}

export const SelectInconvenientRouteReason: FC<ISelectProblemTypeProps> = ({
  value, onChange,
}) => {
  const [selected, setSelected] = useState<InconvenientRouteReasons | undefined>(value);

  const handleChange = (event: SelectChangeEvent<InconvenientRouteReasons>) => {
    setSelected(event.target.value as InconvenientRouteReasons);
    onChange?.(event.target.value as InconvenientRouteReasons);
  };

  useEffect(() => {
    setSelected(value);
  }, [value])

  return (
    <FormControl fullWidth>
      <InputLabel id="select-inconvenient-route-label">Причина</InputLabel>
      <Select
        labelId="select-inconvenient-route-label"
        label="Причина"
        id="select-inconvenient-route"
        value={selected || ''}
        onChange={handleChange}
      >
        <MenuItem value={InconvenientRouteReasons.BUS_STOP_FAR_FROM_A}>Остановка далеко от точки А</MenuItem>
        <MenuItem value={InconvenientRouteReasons.BUS_STOP_FAR_FROM_B}>Остановка далеко от точки Б</MenuItem>
        <MenuItem value={InconvenientRouteReasons.TRANSFERS}>Невозможно добраться без пересадок</MenuItem>
      </Select>
    </FormControl>
  );
};
