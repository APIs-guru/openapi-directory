import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetReportRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetReportRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetReportRelatedColumnNameQueryParams;

  @Metadata()
  security: GetReportRelatedColumnNameSecurity;
}


export class GetReportRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportRelatedColumnName400ApplicationJsonObject?: GetReportRelatedColumnName400ApplicationJson;

  @Metadata()
  getReportRelatedColumnName401ApplicationJsonObject?: GetReportRelatedColumnName401ApplicationJson;

  @Metadata()
  getReportRelatedColumnName404ApplicationJsonObject?: GetReportRelatedColumnName404ApplicationJson;

  @Metadata()
  getReportRelatedColumnName500ApplicationJsonObject?: GetReportRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
