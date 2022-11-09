import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBookingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateBookingRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBookingRequest;

  @Metadata()
  security: CreateBookingSecurity;
}


export class CreateBookingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBookingResponse?: shared.CreateBookingResponse;

  @Metadata()
  statusCode: number;
}
