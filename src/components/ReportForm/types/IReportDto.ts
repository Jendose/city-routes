import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { ICityRoute } from 'components/ReportForm/types/ICityRoute';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';

export interface IReportDto {
  problemType?: ProblemTypes;
  address?: string;
  address2?: string;
  description?: string;
  route?: ICityRoute;
  inconvenientRouteReasons?: InconvenientRouteReasons[];
  minutesOfWaiting?: number;
  amountOfPeople?: number;
}