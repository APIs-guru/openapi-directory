import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class UpdateSiteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateSiteRequest extends SpeakeasyBase {
    pathParams: UpdateSitePathParams;
    request: shared.SiteOptions;
    security: UpdateSiteSecurity;
}
export declare class UpdateSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
