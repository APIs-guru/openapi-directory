import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchOrdersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchOrdersRequest;

  @Metadata()
  security: SearchOrdersSecurity;
}


export class SearchOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchOrdersResponse?: shared.SearchOrdersResponse;

  @Metadata()
  statusCode: number;
}
