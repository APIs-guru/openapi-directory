import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageEnumDirectionEnum } from "./messageenumdirectionenum";
import { MessageEnumStatusEnum } from "./messageenumstatusenum";


export class ApiV2010AccountMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=api_version" })
  apiVersion?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: string;

  @Metadata({ data: "json, name=date_sent" })
  dateSent?: string;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: MessageEnumDirectionEnum;

  @Metadata({ data: "json, name=error_code" })
  errorCode?: number;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=num_media" })
  numMedia?: string;

  @Metadata({ data: "json, name=num_segments" })
  numSegments?: string;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: MessageEnumStatusEnum;

  @Metadata({ data: "json, name=subresource_uris" })
  subresourceUris?: Map<string, any>;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
