import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCssTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostCssTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CssTemplateRestApiPost;

  @Metadata()
  security: PostCssTemplateSecurity;
}


export class PostCssTemplate201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiPost;
}


export class PostCssTemplate400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postCssTemplate201ApplicationJsonObject?: PostCssTemplate201ApplicationJson;

  @Metadata()
  postCssTemplate400ApplicationJsonObject?: PostCssTemplate400ApplicationJson;

  @Metadata()
  postCssTemplate401ApplicationJsonObject?: PostCssTemplate401ApplicationJson;

  @Metadata()
  postCssTemplate422ApplicationJsonObject?: PostCssTemplate422ApplicationJson;

  @Metadata()
  postCssTemplate500ApplicationJsonObject?: PostCssTemplate500ApplicationJson;

  @Metadata()
  statusCode: number;
}
