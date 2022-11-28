import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetDistinctColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDatasetDistinctColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDatasetDistinctColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetDistinctColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetDistinctColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetDistinctColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatasetDistinctColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetDatasetDistinctColumnNameSecurity;
}


export class GetDatasetDistinctColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  distincResponseSchema?: shared.DistincResponseSchema;

  @SpeakeasyMetadata()
  getDatasetDistinctColumnName400ApplicationJsonObject?: GetDatasetDistinctColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetDistinctColumnName401ApplicationJsonObject?: GetDatasetDistinctColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetDistinctColumnName404ApplicationJsonObject?: GetDatasetDistinctColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetDistinctColumnName500ApplicationJsonObject?: GetDatasetDistinctColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
