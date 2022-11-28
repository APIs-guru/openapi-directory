import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCssTemplatePkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetCssTemplatePkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetCssTemplatePkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplatePk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplatePk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplatePk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetCssTemplatePk200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetCssTemplatePk200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.CssTemplateRestApiGet;

  @SpeakeasyMetadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetCssTemplatePk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplatePkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCssTemplatePkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCssTemplatePkQueryParams;

  @SpeakeasyMetadata()
  security: GetCssTemplatePkSecurity;
}


export class GetCssTemplatePkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCssTemplatePk200ApplicationJsonObject?: GetCssTemplatePk200ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplatePk400ApplicationJsonObject?: GetCssTemplatePk400ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplatePk401ApplicationJsonObject?: GetCssTemplatePk401ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplatePk404ApplicationJsonObject?: GetCssTemplatePk404ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplatePk422ApplicationJsonObject?: GetCssTemplatePk422ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplatePk500ApplicationJsonObject?: GetCssTemplatePk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
