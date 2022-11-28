import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CampaignsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    campaignId: string;
}
export declare class CampaignsUpdateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class CampaignsUpdateRequest extends SpeakeasyBase {
    pathParams: CampaignsUpdatePathParams;
    security: CampaignsUpdateSecurity;
}
export declare class CampaignsUpdateResponse extends SpeakeasyBase {
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
}
