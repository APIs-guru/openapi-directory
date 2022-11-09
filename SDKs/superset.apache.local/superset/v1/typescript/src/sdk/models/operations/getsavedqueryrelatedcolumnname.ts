import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetSavedQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetSavedQueryRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSavedQueryRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetSavedQueryRelatedColumnNameQueryParams;

  @Metadata()
  security: GetSavedQueryRelatedColumnNameSecurity;
}


export class GetSavedQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSavedQueryRelatedColumnName400ApplicationJsonObject?: GetSavedQueryRelatedColumnName400ApplicationJson;

  @Metadata()
  getSavedQueryRelatedColumnName401ApplicationJsonObject?: GetSavedQueryRelatedColumnName401ApplicationJson;

  @Metadata()
  getSavedQueryRelatedColumnName404ApplicationJsonObject?: GetSavedQueryRelatedColumnName404ApplicationJson;

  @Metadata()
  getSavedQueryRelatedColumnName500ApplicationJsonObject?: GetSavedQueryRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
