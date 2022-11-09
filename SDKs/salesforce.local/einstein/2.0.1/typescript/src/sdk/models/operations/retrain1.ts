import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Retrain1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "multipart_form, name=epochs" })
  epochs?: number;

  @Metadata({ data: "multipart_form, name=learningRate" })
  learningRate?: number;

  @Metadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @Metadata({ data: "multipart_form, name=trainParams;json=true" })
  trainParams?: shared.V2VisionTrainParams;
}


export class Retrain1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class Retrain1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: Retrain1RequestBody;

  @Metadata()
  security: Retrain1Security;
}


export class Retrain1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trainResponse?: shared.TrainResponse;
}
