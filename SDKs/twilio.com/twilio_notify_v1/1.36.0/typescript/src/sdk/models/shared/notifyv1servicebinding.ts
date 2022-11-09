import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotifyV1ServiceBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=binding_type" })
  bindingType?: string;

  @Metadata({ data: "json, name=credential_sid" })
  credentialSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=notification_protocol_version" })
  notificationProtocolVersion?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
