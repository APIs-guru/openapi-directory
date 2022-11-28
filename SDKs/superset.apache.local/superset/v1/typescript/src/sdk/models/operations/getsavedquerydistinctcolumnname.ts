import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryDistinctColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetSavedQueryDistinctColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetSavedQueryDistinctColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryDistinctColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSavedQueryDistinctColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSavedQueryDistinctColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQueryDistinctColumnNameSecurity;
}


export class GetSavedQueryDistinctColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @SpeakeasyMetadata()
  getSavedQueryDistinctColumnName400ApplicationJsonObject?: GetSavedQueryDistinctColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryDistinctColumnName401ApplicationJsonObject?: GetSavedQueryDistinctColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryDistinctColumnName404ApplicationJsonObject?: GetSavedQueryDistinctColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryDistinctColumnName500ApplicationJsonObject?: GetSavedQueryDistinctColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
