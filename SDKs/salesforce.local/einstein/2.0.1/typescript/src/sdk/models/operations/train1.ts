import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Train1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=algorithm" })
  algorithm?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=datasetId" })
  datasetId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=epochs" })
  epochs?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=learningRate" })
  learningRate?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=trainParams;json=true" })
  trainParams?: shared.V2VisionTrainParams;
}


export class Train1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class Train1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: Train1RequestBody;

  @SpeakeasyMetadata()
  security: Train1Security;
}


export class Train1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trainResponse?: shared.TrainResponse;
}
