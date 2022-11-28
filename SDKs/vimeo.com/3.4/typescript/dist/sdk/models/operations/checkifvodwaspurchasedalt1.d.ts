import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfVodWasPurchasedAlt1PathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class CheckIfVodWasPurchasedAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CheckIfVodWasPurchasedAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfVodWasPurchasedAlt1PathParams;
    security: CheckIfVodWasPurchasedAlt1Security;
}
export declare class CheckIfVodWasPurchasedAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPage?: shared.OnDemandPage;
}
