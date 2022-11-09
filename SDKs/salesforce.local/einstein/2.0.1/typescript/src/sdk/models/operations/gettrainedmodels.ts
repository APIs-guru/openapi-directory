import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModelsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetTrainedModelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModelsPathParams;

  @Metadata()
  queryParams: GetTrainedModelsQueryParams;

  @Metadata()
  security: GetTrainedModelsSecurity;
}


export class GetTrainedModelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  modelList?: shared.ModelList;

  @Metadata()
  statusCode: number;
}
