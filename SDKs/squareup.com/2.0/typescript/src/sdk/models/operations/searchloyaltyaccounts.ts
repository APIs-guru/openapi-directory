import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchLoyaltyAccountsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchLoyaltyAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchLoyaltyAccountsRequest;

  @Metadata()
  security: SearchLoyaltyAccountsSecurity;
}


export class SearchLoyaltyAccountsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchLoyaltyAccountsResponse?: shared.SearchLoyaltyAccountsResponse;

  @Metadata()
  statusCode: number;
}
