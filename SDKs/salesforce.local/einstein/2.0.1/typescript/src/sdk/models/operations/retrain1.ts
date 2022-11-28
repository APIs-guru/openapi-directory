import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Retrain1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=epochs" })
  epochs?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=learningRate" })
  learningRate?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=trainParams;json=true" })
  trainParams?: shared.V2VisionTrainParams;
}


export class Retrain1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class Retrain1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: Retrain1RequestBody;

  @SpeakeasyMetadata()
  security: Retrain1Security;
}


export class Retrain1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainResponse?: shared.TrainResponse;
}
