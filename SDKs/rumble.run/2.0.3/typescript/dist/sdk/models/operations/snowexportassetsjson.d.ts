import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SnowExportAssetsJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class SnowExportAssetsJsonRequest extends SpeakeasyBase {
    security: SnowExportAssetsJsonSecurity;
}
export declare class SnowExportAssetsJsonResponse extends SpeakeasyBase {
    assetServiceNows?: shared.AssetServiceNow[];
    contentType: string;
    statusCode: number;
}
