import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchLoyaltyEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchLoyaltyEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchLoyaltyEventsRequest;

  @Metadata()
  security: SearchLoyaltyEventsSecurity;
}


export class SearchLoyaltyEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchLoyaltyEventsResponse?: shared.SearchLoyaltyEventsResponse;

  @Metadata()
  statusCode: number;
}
