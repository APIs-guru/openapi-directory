import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportWirelessJsonlQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportWirelessJsonlSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportWirelessJsonlRequest extends SpeakeasyBase {
    queryParams: ExportWirelessJsonlQueryParams;
    security: ExportWirelessJsonlSecurity;
}
export declare class ExportWirelessJsonlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportWirelessJsonl200ApplicationJsonBinaryString?: Uint8Array;
}
