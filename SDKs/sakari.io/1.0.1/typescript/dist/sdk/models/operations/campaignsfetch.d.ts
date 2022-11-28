import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CampaignsFetchPathParams extends SpeakeasyBase {
    accountId: string;
    campaignId: string;
}
export declare class CampaignsFetchSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class CampaignsFetchRequest extends SpeakeasyBase {
    pathParams: CampaignsFetchPathParams;
    security: CampaignsFetchSecurity;
}
export declare class CampaignsFetchResponse extends SpeakeasyBase {
    campaignResponse?: shared.CampaignResponse;
    contentType: string;
    statusCode: number;
}
