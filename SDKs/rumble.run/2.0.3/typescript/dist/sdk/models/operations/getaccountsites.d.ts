import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountSitesQueryParams extends SpeakeasyBase {
    search?: string;
}
export declare class GetAccountSitesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAccountSitesRequest extends SpeakeasyBase {
    queryParams: GetAccountSitesQueryParams;
    security: GetAccountSitesSecurity;
}
export declare class GetAccountSitesResponse extends SpeakeasyBase {
    contentType: string;
    sites?: shared.Site[];
    statusCode: number;
}
