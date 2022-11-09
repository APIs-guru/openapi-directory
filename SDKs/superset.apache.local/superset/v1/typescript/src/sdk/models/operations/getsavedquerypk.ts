import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetSavedQueryPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetSavedQueryPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSavedQueryPkPathParams;

  @Metadata()
  queryParams: GetSavedQueryPkQueryParams;

  @Metadata()
  security: GetSavedQueryPkSecurity;
}


export class GetSavedQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetSavedQueryPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetSavedQueryPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetSavedQueryPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetSavedQueryPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSavedQueryPk200ApplicationJsonObject?: GetSavedQueryPk200ApplicationJson;

  @Metadata()
  getSavedQueryPk400ApplicationJsonObject?: GetSavedQueryPk400ApplicationJson;

  @Metadata()
  getSavedQueryPk401ApplicationJsonObject?: GetSavedQueryPk401ApplicationJson;

  @Metadata()
  getSavedQueryPk404ApplicationJsonObject?: GetSavedQueryPk404ApplicationJson;

  @Metadata()
  getSavedQueryPk422ApplicationJsonObject?: GetSavedQueryPk422ApplicationJson;

  @Metadata()
  getSavedQueryPk500ApplicationJsonObject?: GetSavedQueryPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
