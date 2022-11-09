import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchCatalogObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SearchCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SearchCatalogObjectsRequest;

  @Metadata()
  security: SearchCatalogObjectsSecurity;
}


export class SearchCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchCatalogObjectsResponse?: shared.SearchCatalogObjectsResponse;

  @Metadata()
  statusCode: number;
}
