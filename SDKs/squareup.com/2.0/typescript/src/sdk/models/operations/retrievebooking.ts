import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveBookingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=booking_id" })
  bookingId: string;
}


export class RetrieveBookingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveBookingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveBookingPathParams;

  @Metadata()
  security: RetrieveBookingSecurity;
}


export class RetrieveBookingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveBookingResponse?: shared.RetrieveBookingResponse;

  @Metadata()
  statusCode: number;
}
