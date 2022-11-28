import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class GetAssetSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetAssetRequest extends SpeakeasyBase {
    pathParams: GetAssetPathParams;
    security: GetAssetSecurity;
}
export declare class GetAssetResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
