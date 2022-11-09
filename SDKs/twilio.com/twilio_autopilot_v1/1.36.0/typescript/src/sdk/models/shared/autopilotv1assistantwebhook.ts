import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AutopilotV1AssistantWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assistant_sid" })
  assistantSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=events" })
  events?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
