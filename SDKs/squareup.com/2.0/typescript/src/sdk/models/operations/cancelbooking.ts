import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelBookingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=booking_id" })
  bookingId: string;
}


export class CancelBookingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CancelBookingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelBookingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelBookingRequest;

  @Metadata()
  security: CancelBookingSecurity;
}


export class CancelBookingResponse extends SpeakeasyBase {
  @Metadata()
  cancelBookingResponse?: shared.CancelBookingResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
