import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportWirelessJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportWirelessJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportWirelessJsonRequest extends SpeakeasyBase {
    queryParams: ExportWirelessJsonQueryParams;
    security: ExportWirelessJsonSecurity;
}
export declare class ExportWirelessJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wirelesses?: shared.Wireless[];
}
