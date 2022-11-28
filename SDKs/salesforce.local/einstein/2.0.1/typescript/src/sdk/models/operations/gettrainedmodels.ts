import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModelsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetTrainedModelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModelsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrainedModelsQueryParams;

  @SpeakeasyMetadata()
  security: GetTrainedModelsSecurity;
}


export class GetTrainedModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelList?: shared.ModelList;

  @SpeakeasyMetadata()
  statusCode: number;
}
