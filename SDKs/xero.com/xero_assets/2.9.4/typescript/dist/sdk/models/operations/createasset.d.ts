import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAssetHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateAssetSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateAssetRequest extends SpeakeasyBase {
    headers: CreateAssetHeaders;
    request: shared.Asset;
    security: CreateAssetSecurity;
}
export declare class CreateAssetResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
