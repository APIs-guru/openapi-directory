import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CANCELBOOKINGQUOTE_SERVERS = [
	"https://api.sandbox.viator.com/partner",
];



export class CancelBookingQuotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" })
  bookingReference: string;
}


export class CancelBookingQuoteRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CancelBookingQuotePathParams;
}


export class CancelBookingQuoteResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @Metadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @Metadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @Metadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @Metadata()
  cancelBookingQuoteResponse?: shared.CancelBookingQuoteResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
