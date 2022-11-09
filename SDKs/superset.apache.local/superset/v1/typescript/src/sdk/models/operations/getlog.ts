import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetLogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetLogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLogQueryParams;

  @Metadata()
  security: GetLogSecurity;
}


export class GetLog200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLog200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLog200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetLog200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetLog200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.LogRestApiGetList })
  result?: shared.LogRestApiGetList[];
}


export class GetLog400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLog200ApplicationJsonObject?: GetLog200ApplicationJson;

  @Metadata()
  getLog400ApplicationJsonObject?: GetLog400ApplicationJson;

  @Metadata()
  getLog401ApplicationJsonObject?: GetLog401ApplicationJson;

  @Metadata()
  getLog422ApplicationJsonObject?: GetLog422ApplicationJson;

  @Metadata()
  getLog500ApplicationJsonObject?: GetLog500ApplicationJson;

  @Metadata()
  statusCode: number;
}
