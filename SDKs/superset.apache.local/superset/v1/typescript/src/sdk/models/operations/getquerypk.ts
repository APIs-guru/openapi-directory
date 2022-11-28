import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetQueryPkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetQueryPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQueryPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetQueryPk200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetQueryPk200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.QueryRestApiGet;

  @SpeakeasyMetadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetQueryPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryPkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryPkQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryPkSecurity;
}


export class GetQueryPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueryPk200ApplicationJsonObject?: GetQueryPk200ApplicationJson;

  @SpeakeasyMetadata()
  getQueryPk400ApplicationJsonObject?: GetQueryPk400ApplicationJson;

  @SpeakeasyMetadata()
  getQueryPk401ApplicationJsonObject?: GetQueryPk401ApplicationJson;

  @SpeakeasyMetadata()
  getQueryPk404ApplicationJsonObject?: GetQueryPk404ApplicationJson;

  @SpeakeasyMetadata()
  getQueryPk422ApplicationJsonObject?: GetQueryPk422ApplicationJson;

  @SpeakeasyMetadata()
  getQueryPk500ApplicationJsonObject?: GetQueryPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
