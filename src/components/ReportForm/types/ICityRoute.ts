import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';

export interface ICityRoute {
  transportType?: TransportTypes;
  routeName?: string;
}