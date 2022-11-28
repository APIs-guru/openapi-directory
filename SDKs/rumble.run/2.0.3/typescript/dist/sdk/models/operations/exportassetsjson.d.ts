import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExportAssetsJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
}
export declare class ExportAssetsJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class ExportAssetsJsonRequest extends SpeakeasyBase {
    queryParams: ExportAssetsJsonQueryParams;
    security: ExportAssetsJsonSecurity;
}
export declare class ExportAssetsJsonResponse extends SpeakeasyBase {
    assets?: shared.Asset[];
    contentType: string;
    statusCode: number;
}
