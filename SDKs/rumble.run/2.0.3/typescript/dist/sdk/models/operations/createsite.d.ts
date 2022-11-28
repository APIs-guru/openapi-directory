import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSiteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateSiteRequest extends SpeakeasyBase {
    request: shared.SiteOptions;
    security: CreateSiteSecurity;
}
export declare class CreateSiteResponse extends SpeakeasyBase {
    contentType: string;
    site?: shared.Site;
    statusCode: number;
}
