import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CANCELBOOKING_SERVERS = [
	"https://api.sandbox.viator.com/partner",
];



export class CancelBookingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" })
  bookingReference: string;
}


export class CancelBookingHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class CancelBookingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CancelBookingPathParams;

  @Metadata()
  headers: CancelBookingHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.CancellationRequest;
}

export enum CancelBooking400ApplicationJsonCodeEnum {
    BadRequest = "BAD_REQUEST"
}

export enum CancelBooking400ApplicationJsonMessageEnum {
    MissingCancellationReason = "Missing cancellation reason"
}


export class CancelBooking400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: CancelBooking400ApplicationJsonCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: CancelBooking400ApplicationJsonMessageEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}

export enum CancelBooking404ApplicationJsonCodeEnum {
    NotFound = "NOT_FOUND"
}

export enum CancelBooking404ApplicationJsonMessageEnum {
    BookingNotFound = "Booking not found"
}


export class CancelBooking404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: CancelBooking404ApplicationJsonCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: CancelBooking404ApplicationJsonMessageEnum;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;
}


export class CancelBookingResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @Metadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @Metadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @Metadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @Metadata()
  cancelBookingResponse?: shared.CancelBookingResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cancelBooking400ApplicationJsonObject?: CancelBooking400ApplicationJson;

  @Metadata()
  cancelBooking404ApplicationJsonObject?: CancelBooking404ApplicationJson;
}
