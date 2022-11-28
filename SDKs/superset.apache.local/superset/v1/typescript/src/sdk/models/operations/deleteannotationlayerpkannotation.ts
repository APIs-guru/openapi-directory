import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnnotationLayerPkAnnotationPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteAnnotationLayerPkAnnotationQueryParams;

  @SpeakeasyMetadata()
  security: DeleteAnnotationLayerPkAnnotationSecurity;
}


export class DeleteAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotation200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation200ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotation401ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation401ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotation404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation404ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotation422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation422ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotation500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
