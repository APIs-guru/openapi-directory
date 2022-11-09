import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchTerminalCheckoutsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchTerminalCheckoutsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchTerminalCheckoutsRequest;

  @Metadata()
  security: SearchTerminalCheckoutsSecurity;
}


export class SearchTerminalCheckoutsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchTerminalCheckoutsResponse?: shared.SearchTerminalCheckoutsResponse;

  @Metadata()
  statusCode: number;
}
