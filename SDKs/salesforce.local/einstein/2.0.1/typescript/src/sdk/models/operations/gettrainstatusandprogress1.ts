import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainStatusAndProgress1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainStatusAndProgress1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainStatusAndProgress1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainStatusAndProgress1PathParams;

  @SpeakeasyMetadata()
  security: GetTrainStatusAndProgress1Security;
}


export class GetTrainStatusAndProgress1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainResponse?: shared.TrainResponse;
}
