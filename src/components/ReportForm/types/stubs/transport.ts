import { TransportTypes } from 'components/ReportForm/types/enums/TransportTypes';

export const SaratovBusList = [
  '2д', '6', '7', '11', '18д', '20', '22', '27', '28', '36', '37а', '38', '39', '49', '53', '70', '73', '75', '77', '90', '108'
];
export const SaratovMinibusList = [
  '1', '3', '4', '5', '8', '8а', '10', '13', '14', '15', '16', '17', '21', '23', '24', '25', '26', '30', '31', '33', '34', '35', '37', '41', '42', '42к', '44', '45', '46', '52', '54', '55', '55а', '56', '57', '58', '60', '61', '63', '64д', '65', '66', '67', '68', '72', '73', '74', '76', '79', '80', '81', '82', '83', '87', '89', '91', '93', '94', '95', '97', '98', '99', '105', '110', '115'
];
export const SaratovTrolleybusList = [
  '1', '2', '2а', '3', '4', '5', '5а', '7', '10', '11', '15', '16'
];
export const SaratovTramList = [
  '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
];

export const RouteListByTransportType = {
  [TransportTypes.BUS]: SaratovBusList,
  [TransportTypes.MINIBUS]: SaratovMinibusList,
  [TransportTypes.TROLLEYBUS]: SaratovTrolleybusList,
  [TransportTypes.TRAM]: SaratovTramList,
}