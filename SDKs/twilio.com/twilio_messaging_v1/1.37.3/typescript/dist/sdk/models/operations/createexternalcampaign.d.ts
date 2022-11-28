import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateExternalCampaignServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateExternalCampaignCreateExternalCampaignRequest extends SpeakeasyBase {
    campaignId: string;
    messagingServiceSid: string;
}
export declare class CreateExternalCampaignSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateExternalCampaignRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateExternalCampaignCreateExternalCampaignRequest;
    security: CreateExternalCampaignSecurity;
}
export declare class CreateExternalCampaignResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ExternalCampaign?: shared.MessagingV1ExternalCampaign;
}
