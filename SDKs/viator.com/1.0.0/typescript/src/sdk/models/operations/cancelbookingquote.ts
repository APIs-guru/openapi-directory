import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CancelBookingQuoteServerList = [
	"https://api.sandbox.viator.com/partner",
] as const;


export class CancelBookingQuotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=booking-reference" })
  bookingReference: string;
}


export class CancelBookingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CancelBookingQuotePathParams;
}


export class CancelBookingQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @SpeakeasyMetadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @SpeakeasyMetadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @SpeakeasyMetadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @SpeakeasyMetadata()
  cancelBookingQuoteResponse?: shared.CancelBookingQuoteResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
