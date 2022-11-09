import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBookingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=booking_id" })
  bookingId: string;
}


export class UpdateBookingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class UpdateBookingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBookingPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateBookingRequest;

  @Metadata()
  security: UpdateBookingSecurity;
}


export class UpdateBookingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateBookingResponse?: shared.UpdateBookingResponse;
}
