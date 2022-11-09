import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetDatabasePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkPathParams;

  @Metadata()
  queryParams: GetDatabasePkQueryParams;

  @Metadata()
  security: GetDatabasePkSecurity;
}


export class GetDatabasePk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatabasePk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDatabasePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDatabasePk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetDatabasePk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatabaseRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetDatabasePk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabasePk200ApplicationJsonObject?: GetDatabasePk200ApplicationJson;

  @Metadata()
  getDatabasePk400ApplicationJsonObject?: GetDatabasePk400ApplicationJson;

  @Metadata()
  getDatabasePk401ApplicationJsonObject?: GetDatabasePk401ApplicationJson;

  @Metadata()
  getDatabasePk404ApplicationJsonObject?: GetDatabasePk404ApplicationJson;

  @Metadata()
  getDatabasePk422ApplicationJsonObject?: GetDatabasePk422ApplicationJson;

  @Metadata()
  getDatabasePk500ApplicationJsonObject?: GetDatabasePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
