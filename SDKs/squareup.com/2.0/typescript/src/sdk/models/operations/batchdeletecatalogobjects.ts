import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchDeleteCatalogObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class BatchDeleteCatalogObjectsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchDeleteCatalogObjectsRequest;

  @Metadata()
  security: BatchDeleteCatalogObjectsSecurity;
}


export class BatchDeleteCatalogObjectsResponse extends SpeakeasyBase {
  @Metadata()
  batchDeleteCatalogObjectsResponse?: shared.BatchDeleteCatalogObjectsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
