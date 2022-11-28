import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RetrainRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=epochs" })
  epochs?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=learningRate" })
  learningRate?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=trainParams;json=true" })
  trainParams?: shared.V2LanguageTrainParams;
}


export class RetrainSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class RetrainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: RetrainRequestBody;

  @SpeakeasyMetadata()
  security: RetrainSecurity;
}


export class RetrainResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainResponse?: shared.TrainResponse;
}
