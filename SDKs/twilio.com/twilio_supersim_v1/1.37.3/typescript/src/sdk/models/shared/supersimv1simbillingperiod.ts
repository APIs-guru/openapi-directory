import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingPeriodEnumBpTypeEnum } from "./billingperiodenumbptypeenum";



export class SupersimV1SimBillingPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=period_type" })
  periodType?: BillingPeriodEnumBpTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_sid" })
  simSid?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;
}
