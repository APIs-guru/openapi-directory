import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadSwaggerRequestBodySwagger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=swagger" })
  swagger: string;
}


export class UploadSwaggerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  swagger?: UploadSwaggerRequestBodySwagger;
}


export class UploadSwaggerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UploadSwaggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadSwaggerRequestBody;

  @SpeakeasyMetadata()
  security: UploadSwaggerSecurity;
}


export class UploadSwaggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
