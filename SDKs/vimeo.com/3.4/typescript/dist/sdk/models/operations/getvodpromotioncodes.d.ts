import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPromotionCodesPathParams extends SpeakeasyBase {
    ondemandId: number;
    promotionId: number;
}
export declare class GetVodPromotionCodesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetVodPromotionCodesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetVodPromotionCodesRequest extends SpeakeasyBase {
    pathParams: GetVodPromotionCodesPathParams;
    queryParams: GetVodPromotionCodesQueryParams;
    security: GetVodPromotionCodesSecurity;
}
export declare class GetVodPromotionCodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPromotionCode?: shared.OnDemandPromotionCode;
}
