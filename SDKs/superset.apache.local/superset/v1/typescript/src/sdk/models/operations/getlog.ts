import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetLogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetLog200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLog200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetLog200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetLog200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetLog200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.LogRestApiGetList })
  result?: shared.LogRestApiGetList[];
}


export class GetLog400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLog500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLogQueryParams;

  @SpeakeasyMetadata()
  security: GetLogSecurity;
}


export class GetLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLog200ApplicationJsonObject?: GetLog200ApplicationJson;

  @SpeakeasyMetadata()
  getLog400ApplicationJsonObject?: GetLog400ApplicationJson;

  @SpeakeasyMetadata()
  getLog401ApplicationJsonObject?: GetLog401ApplicationJson;

  @SpeakeasyMetadata()
  getLog422ApplicationJsonObject?: GetLog422ApplicationJson;

  @SpeakeasyMetadata()
  getLog500ApplicationJsonObject?: GetLog500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
