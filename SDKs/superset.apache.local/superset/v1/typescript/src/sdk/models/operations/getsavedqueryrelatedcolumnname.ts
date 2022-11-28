import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetSavedQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetSavedQueryRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSavedQueryRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSavedQueryRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQueryRelatedColumnNameSecurity;
}


export class GetSavedQueryRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSavedQueryRelatedColumnName400ApplicationJsonObject?: GetSavedQueryRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryRelatedColumnName401ApplicationJsonObject?: GetSavedQueryRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryRelatedColumnName404ApplicationJsonObject?: GetSavedQueryRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryRelatedColumnName500ApplicationJsonObject?: GetSavedQueryRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
