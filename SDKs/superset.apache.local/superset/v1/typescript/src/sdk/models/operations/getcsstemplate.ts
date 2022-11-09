import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCssTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetCssTemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCssTemplateQueryParams;

  @Metadata()
  security: GetCssTemplateSecurity;
}


export class GetCssTemplate200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplate200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplate200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetCssTemplate200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetCssTemplate200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.CssTemplateRestApiGetList })
  result?: shared.CssTemplateRestApiGetList[];
}


export class GetCssTemplate400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCssTemplate200ApplicationJsonObject?: GetCssTemplate200ApplicationJson;

  @Metadata()
  getCssTemplate400ApplicationJsonObject?: GetCssTemplate400ApplicationJson;

  @Metadata()
  getCssTemplate401ApplicationJsonObject?: GetCssTemplate401ApplicationJson;

  @Metadata()
  getCssTemplate422ApplicationJsonObject?: GetCssTemplate422ApplicationJson;

  @Metadata()
  getCssTemplate500ApplicationJsonObject?: GetCssTemplate500ApplicationJson;

  @Metadata()
  statusCode: number;
}
