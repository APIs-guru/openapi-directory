import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAssetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAssetSecurity extends SpeakeasyBase {
    developerKey: shared.SchemeDeveloperKey;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    pathParams: GetAssetPathParams;
    security: GetAssetSecurity;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    assetResponse?: shared.AssetResponse;
    contentType: string;
    statusCode: number;
}
