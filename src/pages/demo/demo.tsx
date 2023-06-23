import React, {
  FC,
} from 'react';
import style from './demo.module.scss';
import { ReportForm } from 'components/ReportForm/ReportForm';
import telephone from './img/telephone.png'

export interface IDemoProps {

}

export const Demo: FC<IDemoProps> = ({

}) => {

  return (
    <div className={style.wrapper}>
      <img
        className={style.image}
        src={telephone}
      />
      <div className={style.contentMobile}>
        <div className={style.form}>
          <ReportForm />
        </div>
      </div>
    </div>
  );
};
