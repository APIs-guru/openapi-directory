import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPromotionsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare enum GetVodPromotionsFilterEnum {
    Batch = "batch",
    Default = "default",
    Single = "single",
    Vip = "vip"
}
export declare class GetVodPromotionsQueryParams extends SpeakeasyBase {
    filter: GetVodPromotionsFilterEnum;
    page?: number;
    perPage?: number;
}
export declare class GetVodPromotionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetVodPromotionsRequest extends SpeakeasyBase {
    pathParams: GetVodPromotionsPathParams;
    queryParams: GetVodPromotionsQueryParams;
    security: GetVodPromotionsSecurity;
}
export declare class GetVodPromotionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPromotion?: shared.OnDemandPromotion;
}
