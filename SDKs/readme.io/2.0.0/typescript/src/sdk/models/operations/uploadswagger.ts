import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadSwaggerRequestBodySwagger extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=swagger" })
  swagger: string;
}


export class UploadSwaggerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  swagger?: UploadSwaggerRequestBodySwagger;
}


export class UploadSwaggerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UploadSwaggerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadSwaggerRequestBody;

  @Metadata()
  security: UploadSwaggerSecurity;
}


export class UploadSwaggerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
