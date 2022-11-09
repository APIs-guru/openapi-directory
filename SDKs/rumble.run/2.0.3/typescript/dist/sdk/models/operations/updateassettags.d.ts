import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateAssetTagsPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class UpdateAssetTagsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateAssetTagsRequest extends SpeakeasyBase {
    pathParams: UpdateAssetTagsPathParams;
    request: shared.AssetTags;
    security: UpdateAssetTagsSecurity;
}
export declare class UpdateAssetTagsResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
