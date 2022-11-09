import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RemoveAssetPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class RemoveAssetSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class RemoveAssetRequest extends SpeakeasyBase {
    pathParams: RemoveAssetPathParams;
    security: RemoveAssetSecurity;
}
export declare class RemoveAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
