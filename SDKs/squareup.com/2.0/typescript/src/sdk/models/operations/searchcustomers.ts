import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchCustomersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchCustomersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchCustomersRequest;

  @Metadata()
  security: SearchCustomersSecurity;
}


export class SearchCustomersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchCustomersResponse?: shared.SearchCustomersResponse;

  @Metadata()
  statusCode: number;
}
