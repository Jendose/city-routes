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
import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';

// export const ProblemTypeNames = {
//   [ProblemTypes.INCONVENIENT_ROUTE]: 'Неудобно добираться из точки А в точку Б',
//   [ProblemTypes.LONG_WAITING]: 'Долго жду транспорт',
//   [ProblemTypes.BUS_STOP_QUEUE]: 'Очередь на остановке',
//   [ProblemTypes.CROWDED_BUS]: 'Транспорт переполнен',
//   [ProblemTypes.TRAFFIC_JAM]: 'Пробка',
// }

export interface ISelectProblemTypeProps {
  value?: ProblemTypes;
  onChange?: (state: ProblemTypes) => void;
}

export const SelectProblemType: FC<ISelectProblemTypeProps> = ({
  value, onChange,
}) => {
  const [selected, setSelected] = useState<ProblemTypes | undefined>(value);

  const handleChange = (event: SelectChangeEvent<ProblemTypes>) => {
    setSelected(event.target.value as ProblemTypes);
    onChange?.(event.target.value as ProblemTypes);
  };

  useEffect(() => {
    setSelected(value);
  }, [value])

  return (
    <FormControl fullWidth>
      <InputLabel id="select-problem-type-label">Тип проблемы</InputLabel>
      <Select
        labelId="select-problem-type-label"
        label="Тип проблемы"
        id="select-problem-type"
        value={selected || ''}
        onChange={handleChange}
      >
        <MenuItem value={ProblemTypes.INCONVENIENT_ROUTE}>Неудобно добираться из точки А в точку Б</MenuItem>
        <MenuItem value={ProblemTypes.LONG_WAITING}>Долго жду транспорт</MenuItem>
        <MenuItem value={ProblemTypes.BUS_STOP_QUEUE}>Очередь на остановке</MenuItem>
        <MenuItem value={ProblemTypes.CROWDED_BUS}>Транспорт переполнен</MenuItem>
        <MenuItem value={ProblemTypes.TRAFFIC_JAM}>Пробка</MenuItem>
        <MenuItem value={ProblemTypes.OTHER}>Другое</MenuItem>
      </Select>
    </FormControl>
  );
};
