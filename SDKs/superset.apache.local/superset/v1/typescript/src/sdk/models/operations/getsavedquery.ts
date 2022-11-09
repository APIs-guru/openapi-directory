import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetSavedQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSavedQueryQueryParams;

  @Metadata()
  security: GetSavedQuerySecurity;
}


export class GetSavedQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQuery200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetSavedQuery200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetSavedQuery200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.SavedQueryRestApiGetList })
  result?: shared.SavedQueryRestApiGetList[];
}


export class GetSavedQuery400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSavedQuery200ApplicationJsonObject?: GetSavedQuery200ApplicationJson;

  @Metadata()
  getSavedQuery400ApplicationJsonObject?: GetSavedQuery400ApplicationJson;

  @Metadata()
  getSavedQuery401ApplicationJsonObject?: GetSavedQuery401ApplicationJson;

  @Metadata()
  getSavedQuery422ApplicationJsonObject?: GetSavedQuery422ApplicationJson;

  @Metadata()
  getSavedQuery500ApplicationJsonObject?: GetSavedQuery500ApplicationJson;

  @Metadata()
  statusCode: number;
}
