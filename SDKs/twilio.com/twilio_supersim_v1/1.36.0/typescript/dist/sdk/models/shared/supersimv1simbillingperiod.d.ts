import { SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingPeriodEnumBpTypeEnum } from "./billingperiodenumbptypeenum";
export declare class SupersimV1SimBillingPeriod extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endTime?: Date;
    periodType?: BillingPeriodEnumBpTypeEnum;
    sid?: string;
    simSid?: string;
    startTime?: Date;
}
