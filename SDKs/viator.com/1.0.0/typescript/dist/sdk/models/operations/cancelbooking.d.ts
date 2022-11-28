import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CancelBookingServerList: readonly ["https://api.sandbox.viator.com/partner"];
export declare class CancelBookingPathParams extends SpeakeasyBase {
    bookingReference: string;
}
export declare class CancelBookingHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare enum CancelBooking400ApplicationJsonCodeEnum {
    BadRequest = "BAD_REQUEST"
}
export declare enum CancelBooking400ApplicationJsonMessageEnum {
    MissingCancellationReason = "Missing cancellation reason"
}
export declare class CancelBooking400ApplicationJson extends SpeakeasyBase {
    code?: CancelBooking400ApplicationJsonCodeEnum;
    message?: CancelBooking400ApplicationJsonMessageEnum;
    timestamp?: string;
    trackingId?: string;
}
export declare enum CancelBooking404ApplicationJsonCodeEnum {
    NotFound = "NOT_FOUND"
}
export declare enum CancelBooking404ApplicationJsonMessageEnum {
    BookingNotFound = "Booking not found"
}
export declare class CancelBooking404ApplicationJson extends SpeakeasyBase {
    code?: CancelBooking404ApplicationJsonCodeEnum;
    message?: CancelBooking404ApplicationJsonMessageEnum;
    timestamp?: string;
    trackingId?: string;
}
export declare class CancelBookingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CancelBookingPathParams;
    headers: CancelBookingHeaders;
    request?: shared.CancellationRequest;
}
export declare class CancelBookingResponse extends SpeakeasyBase {
    fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;
    fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;
    fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;
    fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;
    cancelBookingResponse?: shared.CancelBookingResponse;
    contentType: string;
    statusCode: number;
    cancelBooking400ApplicationJsonObject?: CancelBooking400ApplicationJson;
    cancelBooking404ApplicationJsonObject?: CancelBooking404ApplicationJson;
}
