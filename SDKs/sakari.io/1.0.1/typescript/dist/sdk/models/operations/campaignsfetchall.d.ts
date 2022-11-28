import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CampaignsFetchAllPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class CampaignsFetchAllQueryParams extends SpeakeasyBase {
    limit?: number;
    name?: string;
    offset?: number;
}
export declare class CampaignsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: shared.SchemeSakariAuth;
}
export declare class CampaignsFetchAllRequest extends SpeakeasyBase {
    pathParams: CampaignsFetchAllPathParams;
    queryParams: CampaignsFetchAllQueryParams;
    security: CampaignsFetchAllSecurity;
}
export declare class CampaignsFetchAllResponse extends SpeakeasyBase {
    campaignsResponse?: shared.CampaignsResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
