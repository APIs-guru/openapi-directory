import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModels1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetTrainedModels1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModels1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModels1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModels1PathParams;

  @Metadata()
  queryParams: GetTrainedModels1QueryParams;

  @Metadata()
  security: GetTrainedModels1Security;
}


export class GetTrainedModels1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  modelList?: shared.ModelList;

  @Metadata()
  statusCode: number;
}
