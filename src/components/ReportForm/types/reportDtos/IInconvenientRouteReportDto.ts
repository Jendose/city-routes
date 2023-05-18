import { IReportDto } from 'components/ReportForm/types/reportDtos/IReportDto';
import { InconvenientRouteReasons } from 'components/ReportForm/types/enums/InconvenientRouteReasons';

export interface IInconvenientRouteReportDto extends IReportDto {
  inconvenientRouteReasons: InconvenientRouteReasons[];
  numberOfTransfers: number;
}