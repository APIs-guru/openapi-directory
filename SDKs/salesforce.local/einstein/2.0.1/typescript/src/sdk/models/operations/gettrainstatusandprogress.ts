import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainStatusAndProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainStatusAndProgressSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainStatusAndProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainStatusAndProgressPathParams;

  @Metadata()
  security: GetTrainStatusAndProgressSecurity;
}


export class GetTrainStatusAndProgressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trainResponse?: shared.TrainResponse;
}
