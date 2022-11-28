import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCssTemplateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetCssTemplateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetCssTemplate200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplate200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetCssTemplate200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetCssTemplate200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetCssTemplate200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.CssTemplateRestApiGetList })
  result?: shared.CssTemplateRestApiGetList[];
}


export class GetCssTemplate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetCssTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCssTemplateQueryParams;

  @SpeakeasyMetadata()
  security: GetCssTemplateSecurity;
}


export class GetCssTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCssTemplate200ApplicationJsonObject?: GetCssTemplate200ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplate400ApplicationJsonObject?: GetCssTemplate400ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplate401ApplicationJsonObject?: GetCssTemplate401ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplate422ApplicationJsonObject?: GetCssTemplate422ApplicationJson;

  @SpeakeasyMetadata()
  getCssTemplate500ApplicationJsonObject?: GetCssTemplate500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
