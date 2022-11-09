import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillingPeriodEnumBpTypeEnum } from "./billingperiodenumbptypeenum";


export class SupersimV1SimBillingPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=period_type" })
  periodType?: BillingPeriodEnumBpTypeEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;
}
