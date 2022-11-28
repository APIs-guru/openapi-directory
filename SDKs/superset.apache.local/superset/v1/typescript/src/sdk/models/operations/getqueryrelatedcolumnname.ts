import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetQueryRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetQueryRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetQueryRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetQueryRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQueryRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetQueryRelatedColumnNameSecurity;
}


export class GetQueryRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getQueryRelatedColumnName400ApplicationJsonObject?: GetQueryRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getQueryRelatedColumnName401ApplicationJsonObject?: GetQueryRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getQueryRelatedColumnName404ApplicationJsonObject?: GetQueryRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getQueryRelatedColumnName500ApplicationJsonObject?: GetQueryRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
