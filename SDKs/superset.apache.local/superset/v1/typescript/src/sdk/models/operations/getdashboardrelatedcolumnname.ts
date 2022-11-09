import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDashboardRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDashboardRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDashboardRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetDashboardRelatedColumnNameQueryParams;

  @Metadata()
  security: GetDashboardRelatedColumnNameSecurity;
}


export class GetDashboardRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardRelatedColumnName400ApplicationJsonObject?: GetDashboardRelatedColumnName400ApplicationJson;

  @Metadata()
  getDashboardRelatedColumnName401ApplicationJsonObject?: GetDashboardRelatedColumnName401ApplicationJson;

  @Metadata()
  getDashboardRelatedColumnName404ApplicationJsonObject?: GetDashboardRelatedColumnName404ApplicationJson;

  @Metadata()
  getDashboardRelatedColumnName500ApplicationJsonObject?: GetDashboardRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
