import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetSavedQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQuery200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQuery200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQuery200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetSavedQuery200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetSavedQuery200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.SavedQueryRestApiGetList })
  result?: shared.SavedQueryRestApiGetList[];
}


export class GetSavedQuery400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQuery500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedQueryQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQuerySecurity;
}


export class GetSavedQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSavedQuery200ApplicationJsonObject?: GetSavedQuery200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQuery400ApplicationJsonObject?: GetSavedQuery400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQuery401ApplicationJsonObject?: GetSavedQuery401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQuery422ApplicationJsonObject?: GetSavedQuery422ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQuery500ApplicationJsonObject?: GetSavedQuery500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
