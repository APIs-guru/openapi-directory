import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCssTemplatePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetCssTemplatePkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetCssTemplatePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplatePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCssTemplatePkPathParams;

  @Metadata()
  queryParams: GetCssTemplatePkQueryParams;

  @Metadata()
  security: GetCssTemplatePkSecurity;
}


export class GetCssTemplatePk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplatePk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetCssTemplatePk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetCssTemplatePk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetCssTemplatePk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCssTemplatePk200ApplicationJsonObject?: GetCssTemplatePk200ApplicationJson;

  @Metadata()
  getCssTemplatePk400ApplicationJsonObject?: GetCssTemplatePk400ApplicationJson;

  @Metadata()
  getCssTemplatePk401ApplicationJsonObject?: GetCssTemplatePk401ApplicationJson;

  @Metadata()
  getCssTemplatePk404ApplicationJsonObject?: GetCssTemplatePk404ApplicationJson;

  @Metadata()
  getCssTemplatePk422ApplicationJsonObject?: GetCssTemplatePk422ApplicationJson;

  @Metadata()
  getCssTemplatePk500ApplicationJsonObject?: GetCssTemplatePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
