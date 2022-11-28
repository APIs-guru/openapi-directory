import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PayRunPayRunPayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}


// PayRunPayRunPaySchedule
/** 
 * The pay runs' pay schedule
**/
export class PayRunPayRunPaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// PayRunPayRunProceedingPayRun
/** 
 * The pay runs' proceeding pay run
**/
export class PayRunPayRunProceedingPayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class PayRunPayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Executed" })
  executed?: Date;

  @SpeakeasyMetadata({ data: "json, name=IsSupplementary" })
  isSupplementary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PayFrequency" })
  payFrequency?: PayRunPayRunPayFrequencyEnum;

  @SpeakeasyMetadata({ data: "json, name=PaySchedule" })
  paySchedule?: PayRunPayRunPaySchedule;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PeriodEnd" })
  periodEnd?: Date;

  @SpeakeasyMetadata({ data: "json, name=PeriodStart" })
  periodStart?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProceedingPayRun" })
  proceedingPayRun?: PayRunPayRunProceedingPayRun;

  @SpeakeasyMetadata({ data: "json, name=Sequence" })
  sequence?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class PayRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayRun" })
  payRun?: PayRunPayRun;
}
