import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagingV1ExternalCampaign extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;
}
