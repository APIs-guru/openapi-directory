import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationLayerPkAnnotationPathParams;

  @Metadata()
  queryParams: GetAnnotationLayerPkAnnotationQueryParams;

  @Metadata()
  security: GetAnnotationLayerPkAnnotationSecurity;
}


export class GetAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.AnnotationRestApiGetList })
  result?: shared.AnnotationRestApiGetList[];
}


export class GetAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayerPkAnnotation200ApplicationJsonObject?: GetAnnotationLayerPkAnnotation200ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotation400ApplicationJsonObject?: GetAnnotationLayerPkAnnotation400ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotation401ApplicationJsonObject?: GetAnnotationLayerPkAnnotation401ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotation422ApplicationJsonObject?: GetAnnotationLayerPkAnnotation422ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotation500ApplicationJsonObject?: GetAnnotationLayerPkAnnotation500ApplicationJson;

  @Metadata()
  statusCode: number;
}
