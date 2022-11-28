import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDataset1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class DeleteDataset1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class DeleteDataset1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDataset1PathParams;

  @SpeakeasyMetadata()
  security: DeleteDataset1Security;
}


export class DeleteDataset1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deletionResponse?: shared.DeletionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
