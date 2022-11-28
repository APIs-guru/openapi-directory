import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataset1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetDataset1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetDataset1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataset1PathParams;

  @SpeakeasyMetadata()
  security: GetDataset1Security;
}


export class GetDataset1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  dataset?: shared.Dataset;

  @SpeakeasyMetadata()
  statusCode: number;
}
