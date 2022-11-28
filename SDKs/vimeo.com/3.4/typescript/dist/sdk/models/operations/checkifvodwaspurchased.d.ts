import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfVodWasPurchasedPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class CheckIfVodWasPurchasedSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckIfVodWasPurchasedRequest extends SpeakeasyBase {
    pathParams: CheckIfVodWasPurchasedPathParams;
    security: CheckIfVodWasPurchasedSecurity;
}
export declare class CheckIfVodWasPurchasedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPage?: shared.OnDemandPage;
}
