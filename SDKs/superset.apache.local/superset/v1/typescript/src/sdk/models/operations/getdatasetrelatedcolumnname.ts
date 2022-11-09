import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetDatasetRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetDatasetRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatasetRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetDatasetRelatedColumnNameQueryParams;

  @Metadata()
  security: GetDatasetRelatedColumnNameSecurity;
}


export class GetDatasetRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatasetRelatedColumnName400ApplicationJsonObject?: GetDatasetRelatedColumnName400ApplicationJson;

  @Metadata()
  getDatasetRelatedColumnName401ApplicationJsonObject?: GetDatasetRelatedColumnName401ApplicationJson;

  @Metadata()
  getDatasetRelatedColumnName404ApplicationJsonObject?: GetDatasetRelatedColumnName404ApplicationJson;

  @Metadata()
  getDatasetRelatedColumnName500ApplicationJsonObject?: GetDatasetRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
