import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetQueryRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetQueryRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQueryRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetQueryRelatedColumnNameQueryParams;

  @Metadata()
  security: GetQueryRelatedColumnNameSecurity;
}


export class GetQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getQueryRelatedColumnName400ApplicationJsonObject?: GetQueryRelatedColumnName400ApplicationJson;

  @Metadata()
  getQueryRelatedColumnName401ApplicationJsonObject?: GetQueryRelatedColumnName401ApplicationJson;

  @Metadata()
  getQueryRelatedColumnName404ApplicationJsonObject?: GetQueryRelatedColumnName404ApplicationJson;

  @Metadata()
  getQueryRelatedColumnName500ApplicationJsonObject?: GetQueryRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
