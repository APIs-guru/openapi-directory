import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportServicesJsonlQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportServicesJsonlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportServicesJsonlRequest extends SpeakeasyBase {
    queryParams: ExportServicesJsonlQueryParams;
    security: ExportServicesJsonlSecurity;
}
export declare class ExportServicesJsonlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportServicesJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
