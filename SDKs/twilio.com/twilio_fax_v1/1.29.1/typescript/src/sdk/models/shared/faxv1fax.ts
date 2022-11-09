import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FaxV1FaxDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
}

export enum FaxV1FaxQualityEnum {
    Standard = "standard"
,    Fine = "fine"
,    Superfine = "superfine"
}

export enum FaxV1FaxStatusEnum {
    Queued = "queued"
,    Processing = "processing"
,    Sending = "sending"
,    Delivered = "delivered"
,    Receiving = "receiving"
,    Received = "received"
,    NoAnswer = "no-answer"
,    Busy = "busy"
,    Failed = "failed"
,    Canceled = "canceled"
}


export class FaxV1Fax extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=direction" })
  direction?: FaxV1FaxDirectionEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=media_sid" })
  mediaSid?: string;

  @Metadata({ data: "json, name=media_url" })
  mediaUrl?: string;

  @Metadata({ data: "json, name=num_pages" })
  numPages?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=quality" })
  quality?: FaxV1FaxQualityEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: FaxV1FaxStatusEnum;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
