import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CancelBookingQuoteServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancelBookingQuotePathParams extends SpeakeasyBase {
    bookingReference: string;
}
export declare class CancelBookingQuoteRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CancelBookingQuotePathParams;
}
export declare class CancelBookingQuoteResponse extends SpeakeasyBase {
    fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;
    fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;
    fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;
    fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;
    cancelBookingQuoteResponse?: shared.CancelBookingQuoteResponse;
    contentType: string;
    statusCode: number;
}
