import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetLogPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetLogPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetLogPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLogPkPathParams;

  @Metadata()
  queryParams: GetLogPkQueryParams;

  @Metadata()
  security: GetLogPkSecurity;
}


export class GetLogPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLogPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLogPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetLogPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetLogPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.LogRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetLogPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLogPk200ApplicationJsonObject?: GetLogPk200ApplicationJson;

  @Metadata()
  getLogPk400ApplicationJsonObject?: GetLogPk400ApplicationJson;

  @Metadata()
  getLogPk401ApplicationJsonObject?: GetLogPk401ApplicationJson;

  @Metadata()
  getLogPk404ApplicationJsonObject?: GetLogPk404ApplicationJson;

  @Metadata()
  getLogPk422ApplicationJsonObject?: GetLogPk422ApplicationJson;

  @Metadata()
  getLogPk500ApplicationJsonObject?: GetLogPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
