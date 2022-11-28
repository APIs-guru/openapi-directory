import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1ExternalCampaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;
}
