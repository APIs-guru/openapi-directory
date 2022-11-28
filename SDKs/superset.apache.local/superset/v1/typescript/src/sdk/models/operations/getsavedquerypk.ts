import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetSavedQueryPkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetSavedQueryPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetSavedQueryPk200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetSavedQueryPk200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiGet;

  @SpeakeasyMetadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetSavedQueryPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSavedQueryPkPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSavedQueryPkQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQueryPkSecurity;
}


export class GetSavedQueryPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSavedQueryPk200ApplicationJsonObject?: GetSavedQueryPk200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryPk400ApplicationJsonObject?: GetSavedQueryPk400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryPk401ApplicationJsonObject?: GetSavedQueryPk401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryPk404ApplicationJsonObject?: GetSavedQueryPk404ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryPk422ApplicationJsonObject?: GetSavedQueryPk422ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryPk500ApplicationJsonObject?: GetSavedQueryPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
