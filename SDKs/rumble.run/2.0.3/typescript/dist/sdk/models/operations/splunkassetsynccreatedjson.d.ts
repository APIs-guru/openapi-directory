import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SplunkAssetSyncCreatedJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
    since?: number;
}
export declare class SplunkAssetSyncCreatedJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class SplunkAssetSyncCreatedJsonRequest extends SpeakeasyBase {
    queryParams: SplunkAssetSyncCreatedJsonQueryParams;
    security: SplunkAssetSyncCreatedJsonSecurity;
}
export declare class SplunkAssetSyncCreatedJsonResponse extends SpeakeasyBase {
    assetsWithCheckpoint?: shared.AssetsWithCheckpoint;
    contentType: string;
    statusCode: number;
}
