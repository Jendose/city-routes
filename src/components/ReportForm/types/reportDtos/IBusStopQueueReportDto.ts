import { IReportDto } from 'components/ReportForm/types/reportDtos/IReportDto';

export interface IBusStopQueueReportDto extends IReportDto {
  amountOfPeople: number;
}