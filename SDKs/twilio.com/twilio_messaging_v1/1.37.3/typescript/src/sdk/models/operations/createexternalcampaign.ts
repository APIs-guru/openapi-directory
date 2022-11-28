import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateExternalCampaignServerList = [
	"https://messaging.twilio.com",
] as const;


export class CreateExternalCampaignCreateExternalCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CampaignId;" })
  campaignId: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class CreateExternalCampaignSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExternalCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExternalCampaignCreateExternalCampaignRequest;

  @SpeakeasyMetadata()
  security: CreateExternalCampaignSecurity;
}


export class CreateExternalCampaignResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1ExternalCampaign?: shared.MessagingV1ExternalCampaign;
}
