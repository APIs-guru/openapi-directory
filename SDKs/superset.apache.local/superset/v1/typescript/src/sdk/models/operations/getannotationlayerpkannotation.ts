import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.AnnotationRestApiGetList })
  result?: shared.AnnotationRestApiGetList[];
}


export class GetAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationLayerPkAnnotationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerPkAnnotationQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerPkAnnotationSecurity;
}


export class GetAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotation200ApplicationJsonObject?: GetAnnotationLayerPkAnnotation200ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotation400ApplicationJsonObject?: GetAnnotationLayerPkAnnotation400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotation401ApplicationJsonObject?: GetAnnotationLayerPkAnnotation401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotation422ApplicationJsonObject?: GetAnnotationLayerPkAnnotation422ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotation500ApplicationJsonObject?: GetAnnotationLayerPkAnnotation500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
