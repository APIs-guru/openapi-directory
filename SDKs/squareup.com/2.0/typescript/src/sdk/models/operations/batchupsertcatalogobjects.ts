import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchUpsertCatalogObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchUpsertCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchUpsertCatalogObjectsRequest;

  @Metadata()
  security: BatchUpsertCatalogObjectsSecurity;
}


export class BatchUpsertCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata()
  batchUpsertCatalogObjectsResponse?: shared.BatchUpsertCatalogObjectsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
