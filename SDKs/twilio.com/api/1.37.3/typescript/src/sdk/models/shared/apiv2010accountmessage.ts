import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageEnumDirectionEnum } from "./messageenumdirectionenum";
import { MessageEnumStatusEnum } from "./messageenumstatusenum";



export class ApiV2010AccountMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=date_sent" })
  dateSent?: string;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: MessageEnumDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=error_code" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=num_media" })
  numMedia?: string;

  @SpeakeasyMetadata({ data: "json, name=num_segments" })
  numSegments?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: MessageEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
