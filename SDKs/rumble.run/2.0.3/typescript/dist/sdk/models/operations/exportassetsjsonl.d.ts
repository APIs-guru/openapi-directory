import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportAssetsJsonlQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportAssetsJsonlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportAssetsJsonlRequest extends SpeakeasyBase {
    queryParams: ExportAssetsJsonlQueryParams;
    security: ExportAssetsJsonlSecurity;
}
export declare class ExportAssetsJsonlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportAssetsJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
