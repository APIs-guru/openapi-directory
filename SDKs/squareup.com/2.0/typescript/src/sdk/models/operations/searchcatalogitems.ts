import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchCatalogItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchCatalogItemsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchCatalogItemsRequest;

  @Metadata()
  security: SearchCatalogItemsSecurity;
}


export class SearchCatalogItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchCatalogItemsResponse?: shared.SearchCatalogItemsResponse;

  @Metadata()
  statusCode: number;
}
