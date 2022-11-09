import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2ServiceMessagingConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
