import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCssTemplatePkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutCssTemplatePkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiPut;
}


export class PutCssTemplatePk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCssTemplatePkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CssTemplateRestApiPut;

  @SpeakeasyMetadata()
  security: PutCssTemplatePkSecurity;
}


export class PutCssTemplatePkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putCssTemplatePk200ApplicationJsonObject?: PutCssTemplatePk200ApplicationJson;

  @SpeakeasyMetadata()
  putCssTemplatePk400ApplicationJsonObject?: PutCssTemplatePk400ApplicationJson;

  @SpeakeasyMetadata()
  putCssTemplatePk401ApplicationJsonObject?: PutCssTemplatePk401ApplicationJson;

  @SpeakeasyMetadata()
  putCssTemplatePk404ApplicationJsonObject?: PutCssTemplatePk404ApplicationJson;

  @SpeakeasyMetadata()
  putCssTemplatePk422ApplicationJsonObject?: PutCssTemplatePk422ApplicationJson;

  @SpeakeasyMetadata()
  putCssTemplatePk500ApplicationJsonObject?: PutCssTemplatePk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
