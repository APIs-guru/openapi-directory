import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryDistinctColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetQueryDistinctColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryDistinctColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryDistinctColumnNamePathParams;

  @Metadata()
  queryParams: GetQueryDistinctColumnNameQueryParams;

  @Metadata()
  security: GetQueryDistinctColumnNameSecurity;
}


export class GetQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryDistinctColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @Metadata()
  getQueryDistinctColumnName400ApplicationJsonObject?: GetQueryDistinctColumnName400ApplicationJson;

  @Metadata()
  getQueryDistinctColumnName401ApplicationJsonObject?: GetQueryDistinctColumnName401ApplicationJson;

  @Metadata()
  getQueryDistinctColumnName404ApplicationJsonObject?: GetQueryDistinctColumnName404ApplicationJson;

  @Metadata()
  getQueryDistinctColumnName500ApplicationJsonObject?: GetQueryDistinctColumnName500ApplicationJson;

  @Metadata()
  statusCode: number;
}
