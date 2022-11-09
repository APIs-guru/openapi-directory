import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEAUTHTOKENPROMOTION_SERVERS: string[];
export declare class UpdateAuthTokenPromotionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateAuthTokenPromotionRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: UpdateAuthTokenPromotionSecurity;
}
export declare class UpdateAuthTokenPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accountsV1AuthTokenPromotion?: shared.AccountsV1AuthTokenPromotion;
}
