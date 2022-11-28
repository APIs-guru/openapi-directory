import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSwaggerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateSwaggerRequestBodySwagger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=swagger" })
  swagger: string;
}


export class UpdateSwaggerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  swagger?: UpdateSwaggerRequestBodySwagger;
}


export class UpdateSwaggerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateSwaggerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSwaggerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UpdateSwaggerRequestBody;

  @SpeakeasyMetadata()
  security: UpdateSwaggerSecurity;
}


export class UpdateSwaggerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
