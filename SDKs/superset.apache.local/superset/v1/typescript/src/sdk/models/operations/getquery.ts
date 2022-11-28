import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQuery200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetQuery200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetQuery200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.QueryRestApiGetList })
  result?: shared.QueryRestApiGetList[];
}


export class GetQuery400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQuery500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryQueryParams;

  @SpeakeasyMetadata()
  security: GetQuerySecurity;
}


export class GetQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQuery200ApplicationJsonObject?: GetQuery200ApplicationJson;

  @SpeakeasyMetadata()
  getQuery400ApplicationJsonObject?: GetQuery400ApplicationJson;

  @SpeakeasyMetadata()
  getQuery401ApplicationJsonObject?: GetQuery401ApplicationJson;

  @SpeakeasyMetadata()
  getQuery422ApplicationJsonObject?: GetQuery422ApplicationJson;

  @SpeakeasyMetadata()
  getQuery500ApplicationJsonObject?: GetQuery500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
