import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDataset1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class DeleteDataset1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteDataset1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDataset1PathParams;

  @Metadata()
  security: DeleteDataset1Security;
}


export class DeleteDataset1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deletionResponse?: shared.DeletionResponse;

  @Metadata()
  statusCode: number;
}
