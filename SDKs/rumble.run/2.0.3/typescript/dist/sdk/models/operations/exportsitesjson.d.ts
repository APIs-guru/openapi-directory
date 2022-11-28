import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportSitesJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportSitesJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportSitesJsonRequest extends SpeakeasyBase {
    queryParams: ExportSitesJsonQueryParams;
    security: ExportSitesJsonSecurity;
}
export declare class ExportSitesJsonResponse extends SpeakeasyBase {
    contentType: string;
    sites?: shared.Site[];
    statusCode: number;
}
