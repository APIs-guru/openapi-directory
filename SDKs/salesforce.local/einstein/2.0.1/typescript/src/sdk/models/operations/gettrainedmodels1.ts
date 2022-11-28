import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModels1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetTrainedModels1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModels1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModels1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModels1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrainedModels1QueryParams;

  @SpeakeasyMetadata()
  security: GetTrainedModels1Security;
}


export class GetTrainedModels1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  modelList?: shared.ModelList;

  @SpeakeasyMetadata()
  statusCode: number;
}
