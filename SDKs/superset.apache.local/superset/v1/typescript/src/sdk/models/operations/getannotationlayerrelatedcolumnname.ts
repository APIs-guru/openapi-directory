import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerRelatedColumnNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=column_name" })
  columnName: string;
}


export class GetAnnotationLayerRelatedColumnNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetRelatedSchema;
}


export class GetAnnotationLayerRelatedColumnNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerRelatedColumnName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerRelatedColumnNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationLayerRelatedColumnNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerRelatedColumnNameQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerRelatedColumnNameSecurity;
}


export class GetAnnotationLayerRelatedColumnNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayerRelatedColumnName400ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerRelatedColumnName401ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerRelatedColumnName404ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName404ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerRelatedColumnName500ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName500ApplicationJson;

  @SpeakeasyMetadata()
  relatedResponseSchema?: shared.RelatedResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
