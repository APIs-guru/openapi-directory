import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetByRenderIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAssetByRenderIdSecurity extends SpeakeasyBase {
    developerKey: shared.SchemeDeveloperKey;
}
export declare class GetAssetByRenderIdRequest extends SpeakeasyBase {
    pathParams: GetAssetByRenderIdPathParams;
    security: GetAssetByRenderIdSecurity;
}
export declare class GetAssetByRenderIdResponse extends SpeakeasyBase {
    assetRenderResponse?: shared.AssetRenderResponse;
    contentType: string;
    statusCode: number;
}
