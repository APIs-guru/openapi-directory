import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerRelatedColumnNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetAnnotationLayerRelatedColumnNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetAnnotationLayerRelatedColumnNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerRelatedColumnNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationLayerRelatedColumnNamePathParams;

  @Metadata()
  queryParams: GetAnnotationLayerRelatedColumnNameQueryParams;

  @Metadata()
  security: GetAnnotationLayerRelatedColumnNameSecurity;
}


export class GetAnnotationLayerRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayerRelatedColumnName400ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName400ApplicationJson;

  @Metadata()
  getAnnotationLayerRelatedColumnName401ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName401ApplicationJson;

  @Metadata()
  getAnnotationLayerRelatedColumnName404ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName404ApplicationJson;

  @Metadata()
  getAnnotationLayerRelatedColumnName500ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName500ApplicationJson;

  @Metadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @Metadata()
  statusCode: number;
}
