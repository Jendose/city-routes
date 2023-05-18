import { IReportDto } from 'components/ReportForm/types/reportDtos/IReportDto';

export interface ILongWaitingReportDto extends IReportDto {
  minutesOfWaiting: number;
}