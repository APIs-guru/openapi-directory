import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateSwaggerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSwaggerRequestBodySwagger extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=swagger" })
  swagger: string;
}


export class UpdateSwaggerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  swagger?: UpdateSwaggerRequestBodySwagger;
}


export class UpdateSwaggerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateSwaggerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateSwaggerPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateSwaggerRequestBody;

  @Metadata()
  security: UpdateSwaggerSecurity;
}


export class UpdateSwaggerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
