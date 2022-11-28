import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDashboardRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDashboardRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDashboardRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDashboardRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardRelatedColumnNameSecurity;
}


export class GetDashboardRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardRelatedColumnName400ApplicationJsonObject?: GetDashboardRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardRelatedColumnName401ApplicationJsonObject?: GetDashboardRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardRelatedColumnName404ApplicationJsonObject?: GetDashboardRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardRelatedColumnName500ApplicationJsonObject?: GetDashboardRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
