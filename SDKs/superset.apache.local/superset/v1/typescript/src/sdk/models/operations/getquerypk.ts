import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetQueryPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetQueryPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryPkPathParams;

  @Metadata()
  queryParams: GetQueryPkQueryParams;

  @Metadata()
  security: GetQueryPkSecurity;
}


export class GetQueryPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQueryPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetQueryPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetQueryPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetQueryPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.QueryRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetQueryPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueryPk200ApplicationJsonObject?: GetQueryPk200ApplicationJson;

  @Metadata()
  getQueryPk400ApplicationJsonObject?: GetQueryPk400ApplicationJson;

  @Metadata()
  getQueryPk401ApplicationJsonObject?: GetQueryPk401ApplicationJson;

  @Metadata()
  getQueryPk404ApplicationJsonObject?: GetQueryPk404ApplicationJson;

  @Metadata()
  getQueryPk422ApplicationJsonObject?: GetQueryPk422ApplicationJson;

  @Metadata()
  getQueryPk500ApplicationJsonObject?: GetQueryPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
