import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Train1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=algorithm" })
  algorithm?: string;

  @Metadata({ data: "multipart_form, name=datasetId" })
  datasetId?: number;

  @Metadata({ data: "multipart_form, name=epochs" })
  epochs?: number;

  @Metadata({ data: "multipart_form, name=learningRate" })
  learningRate?: number;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=trainParams;json=true" })
  trainParams?: shared.V2VisionTrainParams;
}


export class Train1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class Train1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: Train1RequestBody;

  @Metadata()
  security: Train1Security;
}


export class Train1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trainResponse?: shared.TrainResponse;
}
