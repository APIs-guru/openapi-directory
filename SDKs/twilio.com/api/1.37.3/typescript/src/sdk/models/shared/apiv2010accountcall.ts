import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CallEnumStatusEnum } from "./callenumstatusenum";



export class ApiV2010AccountCall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=answered_by" })
  answeredBy?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=forwarded_from" })
  forwardedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=from_formatted" })
  fromFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=group_sid" })
  groupSid?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_call_sid" })
  parentCallSid?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number_sid" })
  phoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=queue_time" })
  queueTime?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CallEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=to_formatted" })
  toFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
