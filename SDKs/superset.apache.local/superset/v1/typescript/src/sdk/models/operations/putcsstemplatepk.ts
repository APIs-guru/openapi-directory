import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCssTemplatePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutCssTemplatePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutCssTemplatePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCssTemplatePkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CssTemplateRestApiPut;

  @Metadata()
  security: PutCssTemplatePkSecurity;
}


export class PutCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiPut;
}


export class PutCssTemplatePk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutCssTemplatePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putCssTemplatePk200ApplicationJsonObject?: PutCssTemplatePk200ApplicationJson;

  @Metadata()
  putCssTemplatePk400ApplicationJsonObject?: PutCssTemplatePk400ApplicationJson;

  @Metadata()
  putCssTemplatePk401ApplicationJsonObject?: PutCssTemplatePk401ApplicationJson;

  @Metadata()
  putCssTemplatePk404ApplicationJsonObject?: PutCssTemplatePk404ApplicationJson;

  @Metadata()
  putCssTemplatePk422ApplicationJsonObject?: PutCssTemplatePk422ApplicationJson;

  @Metadata()
  putCssTemplatePk500ApplicationJsonObject?: PutCssTemplatePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
