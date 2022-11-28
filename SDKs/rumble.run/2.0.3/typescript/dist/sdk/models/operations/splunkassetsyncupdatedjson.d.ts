import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SplunkAssetSyncUpdatedJsonQueryParams extends SpeakeasyBase {
    fields?: string;
    search?: string;
    since?: number;
}
export declare class SplunkAssetSyncUpdatedJsonSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class SplunkAssetSyncUpdatedJsonRequest extends SpeakeasyBase {
    queryParams: SplunkAssetSyncUpdatedJsonQueryParams;
    security: SplunkAssetSyncUpdatedJsonSecurity;
}
export declare class SplunkAssetSyncUpdatedJsonResponse extends SpeakeasyBase {
    assetsWithCheckpoint?: shared.AssetsWithCheckpoint;
    contentType: string;
    statusCode: number;
}
