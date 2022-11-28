import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainStatusAndProgressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainStatusAndProgressSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainStatusAndProgressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainStatusAndProgressPathParams;

  @SpeakeasyMetadata()
  security: GetTrainStatusAndProgressSecurity;
}


export class GetTrainStatusAndProgressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainResponse?: shared.TrainResponse;
}
