import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAssetTypesHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetAssetTypesSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAssetTypesRequest extends SpeakeasyBase {
    headers: GetAssetTypesHeaders;
    security: GetAssetTypesSecurity;
}
export declare class GetAssetTypesResponse extends SpeakeasyBase {
    assetTypes?: shared.AssetType[];
    contentType: string;
    statusCode: number;
}
