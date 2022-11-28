import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCssTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostCssTemplate201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiPost;
}


export class PostCssTemplate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCssTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CssTemplateRestApiPost;

  @SpeakeasyMetadata()
  security: PostCssTemplateSecurity;
}


export class PostCssTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postCssTemplate201ApplicationJsonObject?: PostCssTemplate201ApplicationJson;

  @SpeakeasyMetadata()
  postCssTemplate400ApplicationJsonObject?: PostCssTemplate400ApplicationJson;

  @SpeakeasyMetadata()
  postCssTemplate401ApplicationJsonObject?: PostCssTemplate401ApplicationJson;

  @SpeakeasyMetadata()
  postCssTemplate422ApplicationJsonObject?: PostCssTemplate422ApplicationJson;

  @SpeakeasyMetadata()
  postCssTemplate500ApplicationJsonObject?: PostCssTemplate500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
