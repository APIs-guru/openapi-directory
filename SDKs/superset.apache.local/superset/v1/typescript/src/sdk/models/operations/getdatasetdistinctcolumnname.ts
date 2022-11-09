import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetDistinctColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDatasetDistinctColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDatasetDistinctColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetDistinctColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatasetDistinctColumnNamePathParams;

  @Metadata()
  queryParams: GetDatasetDistinctColumnNameQueryParams;

  @Metadata()
  security: GetDatasetDistinctColumnNameSecurity;
}


export class GetDatasetDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @Metadata()
  getDatasetDistinctColumnName400ApplicationJsonObject?: GetDatasetDistinctColumnName400ApplicationJson;

  @Metadata()
  getDatasetDistinctColumnName401ApplicationJsonObject?: GetDatasetDistinctColumnName401ApplicationJson;

  @Metadata()
  getDatasetDistinctColumnName404ApplicationJsonObject?: GetDatasetDistinctColumnName404ApplicationJson;

  @Metadata()
  getDatasetDistinctColumnName500ApplicationJsonObject?: GetDatasetDistinctColumnName500ApplicationJson;

  @Metadata()
  statusCode: number;
}
