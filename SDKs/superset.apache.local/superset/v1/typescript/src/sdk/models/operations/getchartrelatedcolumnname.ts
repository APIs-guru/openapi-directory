import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetChartRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetChartRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetChartRelatedColumnNameQueryParams;

  @Metadata()
  security: GetChartRelatedColumnNameSecurity;
}


export class GetChartRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartRelatedColumnName400ApplicationJsonObject?: GetChartRelatedColumnName400ApplicationJson;

  @Metadata()
  getChartRelatedColumnName401ApplicationJsonObject?: GetChartRelatedColumnName401ApplicationJson;

  @Metadata()
  getChartRelatedColumnName404ApplicationJsonObject?: GetChartRelatedColumnName404ApplicationJson;

  @Metadata()
  getChartRelatedColumnName500ApplicationJsonObject?: GetChartRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
