import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchRetrieveCatalogObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchRetrieveCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchRetrieveCatalogObjectsRequest;

  @Metadata()
  security: BatchRetrieveCatalogObjectsSecurity;
}


export class BatchRetrieveCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata()
  batchRetrieveCatalogObjectsResponse?: shared.BatchRetrieveCatalogObjectsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
