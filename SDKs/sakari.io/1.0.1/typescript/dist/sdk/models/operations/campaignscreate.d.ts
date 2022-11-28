import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CampaignsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class CampaignsCreateSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class CampaignsCreateRequest extends SpeakeasyBase {
    pathParams: CampaignsCreatePathParams;
    request?: shared.CampaignRequest;
    security: CampaignsCreateSecurity;
}
export declare class CampaignsCreateResponse extends SpeakeasyBase {
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
}
