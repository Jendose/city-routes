import React, {
  useState,
  FC,
  useEffect,
} from 'react';
import {
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from '@mui/material';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';

export interface ICheckInconvenientRouteReasonProps {
  value?: InconvenientRouteReasons[];
  onChange?: (state: InconvenientRouteReasons[]) => void;
}

export const CheckInconvenientRouteReason: FC<ICheckInconvenientRouteReasonProps> = ({
  value, onChange
}) => {
  const [inconvenientRouteReasons, setInconvenientRouteReasons] = useState<InconvenientRouteReasons[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const selectedReason = value as InconvenientRouteReasons;

    if (checked) {
      setInconvenientRouteReasons((prevReasons: InconvenientRouteReasons[]) => [...prevReasons, selectedReason]);
    } else {
      setInconvenientRouteReasons((prevReasons: InconvenientRouteReasons[]) =>
        prevReasons.filter((reason) => reason !== selectedReason)
      );
    }
  };

  useEffect(() => {
    onChange?.(inconvenientRouteReasons);
  }, [inconvenientRouteReasons, onChange])

  return (
    <Box sx={{
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: '5px',
      padding: '6px 12px',
      '&:hover': { border: '1px solid black' }
    }}>
      <FormControlLabel
        control={
          <Checkbox
            value={InconvenientRouteReasons.BUS_STOP_FAR_FROM_A}
            onChange={handleCheckboxChange}
          />
        }
        label="Остановка далеко от точки А"
      />
      <FormControlLabel
        control={
          <Checkbox
            value={InconvenientRouteReasons.BUS_STOP_FAR_FROM_B}
            onChange={handleCheckboxChange}
          />
        }
        label="Остановка далеко от точки Б"
      />
      <FormControlLabel
        control={
          <Checkbox
            value={InconvenientRouteReasons.TRANSFERS}
            onChange={handleCheckboxChange}
          />
        }
        label="Невозможно добраться без пересадок"
      />
    </Box>
  );
};
