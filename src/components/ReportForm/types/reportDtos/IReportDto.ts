import { ProblemTypes } from 'components/ReportForm/types/enums/ProblemTypes';
import { CityRoute } from 'components/ReportForm/types/CityRoute';

export interface IReportDto {
  problemType: ProblemTypes;
  routes: CityRoute[];
  description: string;
}