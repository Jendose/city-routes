import React, {
  FC,
  useState,
} from 'react';
import { IReportDto } from 'components/ReportForm/types/reportDtos/IReportDto';
import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';
import { SelectProblemType } from 'components/ReportForm/components/select/SelectProblemType/SelectProblemType';
import { SelectInconvenientRouteReason } from 'components/ReportForm/components/select/SelectInconvenientRouteReason/SelectInconvenientRouteReason';
import { IInconvenientRouteReportDto } from 'components/ReportForm/types/reportDtos/IInconvenientRouteReportDto';
import { ILongWaitingReportDto } from 'components/ReportForm/types/reportDtos/ILongWaitingReportDto';
import { IBusStopQueueReportDto } from 'components/ReportForm/types/reportDtos/IBusStopQueueReportDto';
import { ICrowdedBusReportDto } from 'components/ReportForm/types/reportDtos/ICrowdedBusReportDto';
import { ITrafficJamReportDto } from 'components/ReportForm/types/reportDtos/ITrafficJamReportDto';
import {
  TextField,
  Box,
} from '@mui/material';
import { SelectTransportType } from 'components/ReportForm/components/select/SelectTransportType/SelectTransportType';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';


export interface IReportFormProps {

}

export const ReportForm: FC<IReportFormProps> = ({

}) => {
  const [selectedProblemType, setSelectedProblemType] = useState<ProblemTypes | undefined>();
  const [selectedTransportType, setSelectedTransportType] = useState<TransportTypes | undefined>();
  const [selectedInconvenientRouteReason, setSelectedInconvenientRouteReason] = useState<InconvenientRouteReasons | undefined>();

  const [inconvenientRouteReportState, setInconvenientRouteReportState] = useState<IInconvenientRouteReportDto>();
  const [longWaitingReportState, setLongWaitingReportState] = useState<ILongWaitingReportDto>();
  const [busStopQueueReportState, setBusStopQueueReportState] = useState<IBusStopQueueReportDto>();
  const [crowdedBusReportState, setCrowdedBusReportState] = useState<ICrowdedBusReportDto>();
  const [trafficJamReportState, setTrafficJamReportState] = useState<ITrafficJamReportDto>();

  const handleProblemTypeChange = (value: ProblemTypes) => {
    setSelectedProblemType(value);
  };

  const handleTransportTypeChange = (value: TransportTypes) => {
    setSelectedTransportType(value);
  };

  const handleInconvenientRouteReasonChange = (value: InconvenientRouteReasons) => {
    setSelectedInconvenientRouteReason(value);
  };

  return (
    <Box sx={{
      width: '350px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <SelectProblemType
        value={selectedProblemType}
        onChange={handleProblemTypeChange}
      />

      <SelectTransportType
        value={selectedTransportType}
        onChange={handleTransportTypeChange}
      />

      {selectedProblemType === ProblemTypes.INCONVENIENT_ROUTE && (
        <SelectInconvenientRouteReason
          value={selectedInconvenientRouteReason}
          onChange={handleInconvenientRouteReasonChange}
        />
      )}

      <TextField
        id="route"
        label="Номер маршрута"
        variant="outlined"
        fullWidth
        // TODO: добавить onChange везде
      />

      {selectedProblemType === ProblemTypes.LONG_WAITING && (
        <TextField
          id="minutes-of-waiting"
          label="Примерное время ожидания (мин)"
          variant="outlined"
          fullWidth
        />
      )}

      {selectedProblemType === ProblemTypes.BUS_STOP_QUEUE && (
        <TextField
          id="amount-of-people"
          label="Примерное количество людей"
          variant="outlined"
          fullWidth
        />
      )}

      <TextField
        id="description"
        label="Описание"
        variant="outlined"
        fullWidth
        multiline
      />
    </Box>
  );
};
