import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryDistinctColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetSavedQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetSavedQueryDistinctColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryDistinctColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSavedQueryDistinctColumnNamePathParams;

  @Metadata()
  queryParams: GetSavedQueryDistinctColumnNameQueryParams;

  @Metadata()
  security: GetSavedQueryDistinctColumnNameSecurity;
}


export class GetSavedQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @Metadata()
  getSavedQueryDistinctColumnName400ApplicationJsonObject?: GetSavedQueryDistinctColumnName400ApplicationJson;

  @Metadata()
  getSavedQueryDistinctColumnName401ApplicationJsonObject?: GetSavedQueryDistinctColumnName401ApplicationJson;

  @Metadata()
  getSavedQueryDistinctColumnName404ApplicationJsonObject?: GetSavedQueryDistinctColumnName404ApplicationJson;

  @Metadata()
  getSavedQueryDistinctColumnName500ApplicationJsonObject?: GetSavedQueryDistinctColumnName500ApplicationJson;

  @Metadata()
  statusCode: number;
}
