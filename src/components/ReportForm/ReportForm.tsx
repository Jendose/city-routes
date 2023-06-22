import React, {
  FC,
  useState,
} from 'react';
import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';
import { SelectProblemType } from 'components/ReportForm/components/select/SelectProblemType/SelectProblemType';
import {
  TextField,
  Box,
} from '@mui/material';
import { SelectTransportType } from 'components/ReportForm/components/select/SelectTransportType/SelectTransportType';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';
import { AutocompleteRoute } from 'components/ReportForm/components/autocomplete/AutocompleteRoute/AutocompleteRoute';
import { IReportDto } from 'components/ReportForm/types/IReportDto';
import { CheckInconvenientRouteReason } from 'components/ReportForm/components/checkbox/CheckInconvenientRouteReason';


export interface IReportFormProps {

}

export const ReportForm: FC<IReportFormProps> = ({

}) => {
  const [selectedProblemType, setSelectedProblemType] = useState<ProblemTypes | undefined>();
  const [selectedTransportType, setSelectedTransportType] = useState<TransportTypes | undefined>();
  const [selectedInconvenientRouteReasons, setSelectedInconvenientRouteReasons] = useState<InconvenientRouteReasons[]>([]);

  const [routeReportState, setRouteReportState] = useState<IReportDto | undefined>();

  const handleProblemTypeChange = (value: ProblemTypes) => {
    setSelectedProblemType(value);
    setSelectedTransportType(undefined);
    setSelectedInconvenientRouteReasons([]);
  };

  const handleTransportTypeChange = (value: TransportTypes) => {
    setSelectedTransportType(value);
  };

  const handleInconvenientRouteReasonChange = (value: InconvenientRouteReasons[]) => {
    setSelectedInconvenientRouteReasons(value);
    // TODO: Добавить везде заполнения полей в routeReportState
    //  (мы сможем хранить этот объект локально на фронте, тогда на защите можно будет создать любую жалобу и открыть её в списке)
  };

  return (
    <Box sx={{
      width: '370px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <SelectProblemType
        value={selectedProblemType}
        onChange={handleProblemTypeChange}
      />

      {selectedProblemType && (
        <>
          {selectedProblemType !== ProblemTypes.OTHER && (
            <>
              {selectedProblemType === ProblemTypes.INCONVENIENT_ROUTE && (
                <CheckInconvenientRouteReason
                  value={selectedInconvenientRouteReasons}
                  onChange={handleInconvenientRouteReasonChange}
                />
              )}

              {selectedProblemType !== ProblemTypes.INCONVENIENT_ROUTE && (
                <>
                  <SelectTransportType
                    value={selectedTransportType}
                    onChange={handleTransportTypeChange}
                  />

                  {selectedTransportType && (
                    <AutocompleteRoute
                      transportType={selectedTransportType}

                    />
                  )}
                </>
              )}

              {selectedProblemType === ProblemTypes.LONG_WAITING && (
                <TextField
                  id="minutes-of-waiting"
                  label="Примерное время ожидания (мин)"
                  variant="outlined"
                  fullWidth
                  // TODO: Добавить onChange везде
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
            </>
          )}

          <TextField
            id="description"
            label="Описание"
            variant="outlined"
            fullWidth
            multiline
          />
        </>
      )}
    </Box>
  );
};
