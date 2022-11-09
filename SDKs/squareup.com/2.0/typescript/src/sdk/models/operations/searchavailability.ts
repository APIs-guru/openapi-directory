import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchAvailabilitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchAvailabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchAvailabilityRequest;

  @Metadata()
  security: SearchAvailabilitySecurity;
}


export class SearchAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchAvailabilityResponse?: shared.SearchAvailabilityResponse;

  @Metadata()
  statusCode: number;
}
