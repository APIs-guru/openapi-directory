import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryDistinctColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetQueryDistinctColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryDistinctColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryDistinctColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryDistinctColumnNameSecurity;
}


export class GetQueryDistinctColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @SpeakeasyMetadata()
  getQueryDistinctColumnName400ApplicationJsonObject?: GetQueryDistinctColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getQueryDistinctColumnName401ApplicationJsonObject?: GetQueryDistinctColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getQueryDistinctColumnName404ApplicationJsonObject?: GetQueryDistinctColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getQueryDistinctColumnName500ApplicationJsonObject?: GetQueryDistinctColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
