import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAssetByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAssetByIdHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetAssetByIdSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetAssetByIdRequest extends SpeakeasyBase {
    pathParams: GetAssetByIdPathParams;
    headers: GetAssetByIdHeaders;
    security: GetAssetByIdSecurity;
}
export declare class GetAssetByIdResponse extends SpeakeasyBase {
    asset?: shared.Asset;
    contentType: string;
    statusCode: number;
}
