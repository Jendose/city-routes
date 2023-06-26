import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { ICityRoute } from 'components/ReportForm/types/ICityRoute';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';
import { IMarker } from 'components/ReportForm/types/IMarker';

export interface IReportDto {
  problemType?: ProblemTypes;
  address?: IMarker;
  address2?: IMarker;
  description?: string;
  route?: ICityRoute;
  inconvenientRouteReasons?: InconvenientRouteReasons[];
  minutesOfWaiting?: number;
  amountOfPeople?: number;
}