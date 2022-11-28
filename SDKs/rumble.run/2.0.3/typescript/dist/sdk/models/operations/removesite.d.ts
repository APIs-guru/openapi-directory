import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveSitePathParams extends SpeakeasyBase {
    siteId: string;
}
export declare class RemoveSiteSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveSiteRequest extends SpeakeasyBase {
    pathParams: RemoveSitePathParams;
    security: RemoveSiteSecurity;
}
export declare class RemoveSiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
