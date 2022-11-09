import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PayRunPayRunPayFrequencyEnum {
    Weekly = "Weekly"
,    Monthly = "Monthly"
,    TwoWeekly = "TwoWeekly"
,    FourWeekly = "FourWeekly"
,    Yearly = "Yearly"
}


// PayRunPayRunPaySchedule
/** 
 * The pay runs' pay schedule
**/
export class PayRunPayRunPaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// PayRunPayRunProceedingPayRun
/** 
 * The pay runs' proceeding pay run
**/
export class PayRunPayRunProceedingPayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class PayRunPayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=Executed" })
  executed?: Date;

  @Metadata({ data: "json, name=IsSupplementary" })
  isSupplementary?: boolean;

  @Metadata({ data: "json, name=PayFrequency" })
  payFrequency?: PayRunPayRunPayFrequencyEnum;

  @Metadata({ data: "json, name=PaySchedule" })
  paySchedule?: PayRunPayRunPaySchedule;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "json, name=PeriodEnd" })
  periodEnd?: Date;

  @Metadata({ data: "json, name=PeriodStart" })
  periodStart?: Date;

  @Metadata({ data: "json, name=ProceedingPayRun" })
  proceedingPayRun?: PayRunPayRunProceedingPayRun;

  @Metadata({ data: "json, name=Sequence" })
  sequence?: number;

  @Metadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class PayRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayRun" })
  payRun?: PayRunPayRun;
}
