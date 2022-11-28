import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OcrMultipartRequestBodySampleContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=sampleContent" })
  sampleContent: string;
}


export class OcrMultipartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  sampleContent?: OcrMultipartRequestBodySampleContent;

  @SpeakeasyMetadata({ data: "multipart_form, name=sampleId" })
  sampleId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=sampleLocation" })
  sampleLocation?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=task" })
  task?: string;
}


export class OcrMultipartSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class OcrMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: OcrMultipartRequestBody;

  @SpeakeasyMetadata()
  security: OcrMultipartSecurity;
}


export class OcrMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ocrPredictResponse?: shared.OcrPredictResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
