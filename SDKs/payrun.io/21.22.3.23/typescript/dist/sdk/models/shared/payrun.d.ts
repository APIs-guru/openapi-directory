import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PayRunPayRunPayFrequencyEnum {
    Weekly = "Weekly",
    Monthly = "Monthly",
    TwoWeekly = "TwoWeekly",
    FourWeekly = "FourWeekly",
    Yearly = "Yearly"
}
/**
 * The pay runs' pay schedule
**/
export declare class PayRunPayRunPaySchedule extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The pay runs' proceeding pay run
**/
export declare class PayRunPayRunProceedingPayRun extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class PayRunPayRun extends SpeakeasyBase {
    executed?: Date;
    isSupplementary?: boolean;
    payFrequency?: PayRunPayRunPayFrequencyEnum;
    paySchedule?: PayRunPayRunPaySchedule;
    paymentDate?: Date;
    periodEnd?: Date;
    periodStart?: Date;
    proceedingPayRun?: PayRunPayRunProceedingPayRun;
    sequence?: number;
    taxPeriod?: number;
    taxYear?: number;
}
export declare class PayRun extends SpeakeasyBase {
    payRun?: PayRunPayRun;
}
