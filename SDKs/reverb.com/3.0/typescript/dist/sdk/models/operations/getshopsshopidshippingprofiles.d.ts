import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShopsShopIdShippingProfilesPathParams extends SpeakeasyBase {
    shopId: string;
}
export declare class GetShopsShopIdShippingProfilesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetShopsShopIdShippingProfilesRequest extends SpeakeasyBase {
    pathParams: GetShopsShopIdShippingProfilesPathParams;
    security: GetShopsShopIdShippingProfilesSecurity;
}
export declare class GetShopsShopIdShippingProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
