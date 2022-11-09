import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainStatusAndProgress1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainStatusAndProgress1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainStatusAndProgress1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainStatusAndProgress1PathParams;

  @Metadata()
  security: GetTrainStatusAndProgress1Security;
}


export class GetTrainStatusAndProgress1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trainResponse?: shared.TrainResponse;
}
