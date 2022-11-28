import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSitesSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetSitesRequest extends SpeakeasyBase {
    security: GetSitesSecurity;
}
export declare class GetSitesResponse extends SpeakeasyBase {
    contentType: string;
    sites?: shared.Site[];
    statusCode: number;
}
