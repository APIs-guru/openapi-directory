import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FaxV1FaxDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum FaxV1FaxQualityEnum {
    Standard = "standard",
    Fine = "fine",
    Superfine = "superfine"
}

export enum FaxV1FaxStatusEnum {
    Queued = "queued",
    Processing = "processing",
    Sending = "sending",
    Delivered = "delivered",
    Receiving = "receiving",
    Received = "received",
    NoAnswer = "no-answer",
    Busy = "busy",
    Failed = "failed",
    Canceled = "canceled"
}


export class FaxV1Fax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: FaxV1FaxDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=media_sid" })
  mediaSid?: string;

  @SpeakeasyMetadata({ data: "json, name=media_url" })
  mediaUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=num_pages" })
  numPages?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: FaxV1FaxQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FaxV1FaxStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
