import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryQueryParams;

  @Metadata()
  security: GetQuerySecurity;
}


export class GetQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQuery200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetQuery200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetQuery200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.QueryRestApiGetList })
  result?: shared.QueryRestApiGetList[];
}


export class GetQuery400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQuery200ApplicationJsonObject?: GetQuery200ApplicationJson;

  @Metadata()
  getQuery400ApplicationJsonObject?: GetQuery400ApplicationJson;

  @Metadata()
  getQuery401ApplicationJsonObject?: GetQuery401ApplicationJson;

  @Metadata()
  getQuery422ApplicationJsonObject?: GetQuery422ApplicationJson;

  @Metadata()
  getQuery500ApplicationJsonObject?: GetQuery500ApplicationJson;

  @Metadata()
  statusCode: number;
}
