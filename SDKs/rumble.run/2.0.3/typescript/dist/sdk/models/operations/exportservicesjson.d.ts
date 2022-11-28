import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportServicesJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportServicesJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportServicesJsonRequest extends SpeakeasyBase {
    queryParams: ExportServicesJsonQueryParams;
    security: ExportServicesJsonSecurity;
}
export declare class ExportServicesJsonResponse extends SpeakeasyBase {
    contentType: string;
    services?: shared.Service[];
    statusCode: number;
}
