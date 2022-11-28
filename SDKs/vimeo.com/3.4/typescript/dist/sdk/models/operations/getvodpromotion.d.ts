import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPromotionPathParams extends SpeakeasyBase {
    ondemandId: number;
    promotionId: number;
}
export declare class GetVodPromotionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetVodPromotionRequest extends SpeakeasyBase {
    pathParams: GetVodPromotionPathParams;
    security: GetVodPromotionSecurity;
}
export declare class GetVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPromotion?: shared.OnDemandPromotion;
}
