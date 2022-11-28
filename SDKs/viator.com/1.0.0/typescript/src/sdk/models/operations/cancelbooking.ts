import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CancelBookingServerList = [
	"https://api.sandbox.viator.com/partner",
] as const;


export class CancelBookingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" })
  bookingReference: string;
}


export class CancelBookingHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}

export enum CancelBooking400ApplicationJsonCodeEnum {
    BadRequest = "BAD_REQUEST"
}

export enum CancelBooking400ApplicationJsonMessageEnum {
    MissingCancellationReason = "Missing cancellation reason"
}


export class CancelBooking400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: CancelBooking400ApplicationJsonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: CancelBooking400ApplicationJsonMessageEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}

export enum CancelBooking404ApplicationJsonCodeEnum {
    NotFound = "NOT_FOUND"
}

export enum CancelBooking404ApplicationJsonMessageEnum {
    BookingNotFound = "Booking not found"
}


export class CancelBooking404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: CancelBooking404ApplicationJsonCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: CancelBooking404ApplicationJsonMessageEnum;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;
}


export class CancelBookingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CancelBookingPathParams;

  @SpeakeasyMetadata()
  headers: CancelBookingHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CancellationRequest;
}


export class CancelBookingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @SpeakeasyMetadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @SpeakeasyMetadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @SpeakeasyMetadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @SpeakeasyMetadata()
  cancelBookingResponse?: shared.CancelBookingResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelBooking400ApplicationJsonObject?: CancelBooking400ApplicationJson;

  @SpeakeasyMetadata()
  cancelBooking404ApplicationJsonObject?: CancelBooking404ApplicationJson;
}
