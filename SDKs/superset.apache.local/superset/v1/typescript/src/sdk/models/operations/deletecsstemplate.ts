import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCssTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteCssTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteCssTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteCssTemplateQueryParams;

  @Metadata()
  security: DeleteCssTemplateSecurity;
}


export class DeleteCssTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteCssTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteCssTemplate200ApplicationJsonObject?: DeleteCssTemplate200ApplicationJson;

  @Metadata()
  deleteCssTemplate401ApplicationJsonObject?: DeleteCssTemplate401ApplicationJson;

  @Metadata()
  deleteCssTemplate404ApplicationJsonObject?: DeleteCssTemplate404ApplicationJson;

  @Metadata()
  deleteCssTemplate422ApplicationJsonObject?: DeleteCssTemplate422ApplicationJson;

  @Metadata()
  deleteCssTemplate500ApplicationJsonObject?: DeleteCssTemplate500ApplicationJson;

  @Metadata()
  statusCode: number;
}
