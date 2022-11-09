import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssetCommentsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class UpdateAssetCommentsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateAssetCommentsRequest extends SpeakeasyBase {
    pathParams: UpdateAssetCommentsPathParams;
    request: shared.AssetComments;
    security: UpdateAssetCommentsSecurity;
}
export declare class UpdateAssetCommentsResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
