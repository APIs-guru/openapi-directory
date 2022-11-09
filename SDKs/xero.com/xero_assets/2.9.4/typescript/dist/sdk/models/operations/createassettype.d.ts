import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateAssetTypeHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateAssetTypeSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateAssetTypeRequest extends SpeakeasyBase {
    headers: CreateAssetTypeHeaders;
    request?: shared.AssetType;
    security: CreateAssetTypeSecurity;
}
export declare class CreateAssetTypeResponse extends SpeakeasyBase {
    assetType?: shared.AssetType;
    contentType: string;
    statusCode: number;
}
