import React, {
  FC,
  useState,
  useEffect,
} from 'react';
import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { SelectProblemType } from 'components/ReportForm/components/select/SelectProblemType/SelectProblemType';
import {
  TextField,
  Box,
  Button,
  Typography,
  Snackbar,
  SnackbarContent,
} from '@mui/material';
import { SelectTransportType } from 'components/ReportForm/components/select/SelectTransportType/SelectTransportType';
import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';
import { AutocompleteRoute } from 'components/ReportForm/components/autocomplete/AutocompleteRoute/AutocompleteRoute';
import { IReportDto } from 'components/ReportForm/types/IReportDto';
import { CheckInconvenientRouteReason } from 'components/ReportForm/components/checkbox/CheckInconvenientRouteReason';
import { setDeep } from 'utils/setDeep';
import { AutocompleteAddress } from 'components/ReportForm/components/autocomplete/AutocompleteAddress/AutocompleteAddress';


export interface IReportFormProps {

}

export const ReportForm: FC<IReportFormProps> = ({

}) => {
  const [selectedProblemType, setSelectedProblemType] = useState<ProblemTypes | undefined>();
  const [selectedTransportType, setSelectedTransportType] = useState<TransportTypes | undefined>();

  const [report, setReport] = useState<IReportDto | undefined>({});

  const [key, setKey] = useState<number>(0);
  const [openSuccessToast, setOpenSuccessToast] = useState<boolean>();

  const setField = (field: string, value: any) => {
    setDeep(setReport, field, value);
  };

  const clearFields = () => {
    setReport({ problemType: report?.problemType });
    setSelectedTransportType(undefined);
    setKey((prevKey) => prevKey + 1);
  }

  useEffect(() => {
    console.log(report);
  }, [report])

  const handleProblemTypeChange = (value: ProblemTypes) => {
    setField('problemType', value);
    setSelectedProblemType(value);
    clearFields();
  };

  const handleTransportTypeChange = (value: TransportTypes) => {
    setField('route.transportType', value);
    setSelectedTransportType(value);
  };

  const handleSubmit = () => {
    // localStorage.setItem('report', JSON.stringify(report));
    setTimeout(() => {
      console.log('Форма отправлена', report);
      setOpenSuccessToast(true);
      setTimeout(() => {
        setSelectedProblemType(undefined);
        clearFields();
      }, 100)
    }, 1600);
  };

  return (
    <Box sx={{
      width: '370px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
    }}>
      <Typography
        variant="h5"
        sx={{
          marginBottom: '10px',
          color: '#666666',
          fontWeight: 'bold',
        }}
      >
        Оставьте жалобу
      </Typography>

      <SelectProblemType
        value={selectedProblemType}
        onChange={handleProblemTypeChange}
      />

      {selectedProblemType && (
        <>
          {selectedProblemType !== ProblemTypes.INCONVENIENT_ROUTE && (
            <AutocompleteAddress
              key={key+1}
              value={report?.address}
              onChange={(val) => setField('address', val)}
            />
          )}

          {selectedProblemType !== ProblemTypes.OTHER && (
            <>
              {selectedProblemType === ProblemTypes.INCONVENIENT_ROUTE && (
                <>
                  <AutocompleteAddress
                    label="Адрес точки А"
                    key={key+2}
                    value={report?.address}
                    onChange={(val) => setField('address', val)}
                  />
                  <AutocompleteAddress
                    label="Адрес точки Б"
                    key={key+3}
                    value={report?.address2}
                    onChange={(val) => setField('address2', val)}
                  />
                  <CheckInconvenientRouteReason
                    value={report?.inconvenientRouteReasons}
                    onChange={(val) => setField('inconvenientRouteReasons', val)}
                  />
                </>
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
                      value={report?.route?.routeName}
                      onChange={(val) => setField('route.routeName', val)}
                    />
                  )}
                </>
              )}

              {selectedProblemType === ProblemTypes.LONG_WAITING && (
                <TextField
                  key={key+4}
                  id="minutes-of-waiting"
                  label="Примерное время ожидания (мин)"
                  variant="outlined"
                  fullWidth
                  value={report?.minutesOfWaiting}
                  onInput={(event) => setField('minutesOfWaiting', (event.target as HTMLInputElement).value)}
                />
              )}

              {(selectedProblemType === ProblemTypes.BUS_STOP_QUEUE || selectedProblemType === ProblemTypes.CROWDED_BUS) && (
                <TextField
                  key={key+5}
                  id="amount-of-people"
                  label="Примерное количество людей"
                  variant="outlined"
                  fullWidth
                  value={report?.amountOfPeople}
                  onInput={(event) => setField('amountOfPeople', (event.target as HTMLInputElement).value)}
                />
              )}
            </>
          )}

          <TextField
            key={key+6}
            id="description"
            label="Описание"
            variant="outlined"
            fullWidth
            multiline
            value={report?.description}
            onInput={(event) => setField('description', (event.target as HTMLInputElement).value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{width: 'fit-content', marginTop: '10px'}}
          >
            Отправить
          </Button>
        </>
      )}

      <Snackbar
        open={openSuccessToast}
        autoHideDuration={6000}
        onClose={() => setOpenSuccessToast(false)}
        sx={{
          height: '200px',
          "& .MuiSnackbarContent-root": { backgroundColor: "green" }
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <SnackbarContent
          message={'Успешно отправлено'}
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </Snackbar>
    </Box>
  );
};
