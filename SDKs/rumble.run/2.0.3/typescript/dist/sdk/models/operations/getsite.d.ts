import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class GetSiteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetSiteRequest extends SpeakeasyBase {
    pathParams: GetSitePathParams;
    security: GetSiteSecurity;
}
export declare class GetSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
