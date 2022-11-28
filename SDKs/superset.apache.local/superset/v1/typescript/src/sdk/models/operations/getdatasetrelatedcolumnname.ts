import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDatasetRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDatasetRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatasetRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatasetRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetDatasetRelatedColumnNameSecurity;
}


export class GetDatasetRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatasetRelatedColumnName400ApplicationJsonObject?: GetDatasetRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetRelatedColumnName401ApplicationJsonObject?: GetDatasetRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetRelatedColumnName404ApplicationJsonObject?: GetDatasetRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetRelatedColumnName500ApplicationJsonObject?: GetDatasetRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
