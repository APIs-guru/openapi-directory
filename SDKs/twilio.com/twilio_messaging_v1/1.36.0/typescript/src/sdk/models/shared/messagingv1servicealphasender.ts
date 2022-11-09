import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagingV1ServiceAlphaSender extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=alpha_sender" })
  alphaSender?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
