import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchSubscriptionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchSubscriptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchSubscriptionsRequest;

  @Metadata()
  security: SearchSubscriptionsSecurity;
}


export class SearchSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchSubscriptionsResponse?: shared.SearchSubscriptionsResponse;

  @Metadata()
  statusCode: number;
}
