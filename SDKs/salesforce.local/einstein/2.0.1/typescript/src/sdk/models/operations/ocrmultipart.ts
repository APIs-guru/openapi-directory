import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OcrMultipartRequestBodySampleContent extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=sampleContent" })
  sampleContent: string;
}


export class OcrMultipartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=modelId" })
  modelId?: string;

  @Metadata({ data: "multipart_form, file=true" })
  sampleContent?: OcrMultipartRequestBodySampleContent;

  @Metadata({ data: "multipart_form, name=sampleId" })
  sampleId?: string;

  @Metadata({ data: "multipart_form, name=sampleLocation" })
  sampleLocation?: string;

  @Metadata({ data: "multipart_form, name=task" })
  task?: string;
}


export class OcrMultipartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class OcrMultipartRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: OcrMultipartRequestBody;

  @Metadata()
  security: OcrMultipartSecurity;
}


export class OcrMultipartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ocrPredictResponse?: shared.OcrPredictResponse;

  @Metadata()
  statusCode: number;
}
