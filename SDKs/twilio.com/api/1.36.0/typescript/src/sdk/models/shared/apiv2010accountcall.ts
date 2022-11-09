import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CallEnumStatusEnum } from "./callenumstatusenum";


export class ApiV2010AccountCall extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=answered_by" })
  answeredBy?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=caller_name" })
  callerName?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=forwarded_from" })
  forwardedFrom?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=from_formatted" })
  fromFormatted?: string;

  @Metadata({ data: "json, name=group_sid" })
  groupSid?: string;

  @Metadata({ data: "json, name=parent_call_sid" })
  parentCallSid?: string;

  @Metadata({ data: "json, name=phone_number_sid" })
  phoneNumberSid?: string;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=queue_time" })
  queueTime?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: CallEnumStatusEnum;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=to_formatted" })
  toFormatted?: string;

  @Metadata({ data: "json, name=trunk_sid" })
  trunkSid?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
