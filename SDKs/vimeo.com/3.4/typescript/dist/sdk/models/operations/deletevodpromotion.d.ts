import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodPromotionPathParams extends SpeakeasyBase {
    ondemandId: number;
    promotionId: number;
}
export declare class DeleteVodPromotionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodPromotionRequest extends SpeakeasyBase {
    pathParams: DeleteVodPromotionPathParams;
    security: DeleteVodPromotionSecurity;
}
export declare class DeleteVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
