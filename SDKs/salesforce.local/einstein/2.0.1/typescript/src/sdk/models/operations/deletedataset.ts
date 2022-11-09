import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatasetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class DeleteDatasetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteDatasetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatasetPathParams;

  @Metadata()
  security: DeleteDatasetSecurity;
}


export class DeleteDatasetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletionResponse?: shared.DeletionResponse;

  @Metadata()
  statusCode: number;
}
