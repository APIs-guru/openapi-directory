import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEEXTERNALCAMPAIGN_SERVERS = [
	"https://messaging.twilio.com",
];



export class CreateExternalCampaignCreateExternalCampaignRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CampaignId;" })
  campaignId: string;

  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid: string;
}


export class CreateExternalCampaignSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExternalCampaignRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExternalCampaignCreateExternalCampaignRequest;

  @Metadata()
  security: CreateExternalCampaignSecurity;
}


export class CreateExternalCampaignResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1ExternalCampaign?: shared.MessagingV1ExternalCampaign;
}
