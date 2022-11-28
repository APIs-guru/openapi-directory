import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiPut;
}


export class PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationRestApiPut;

  @SpeakeasyMetadata()
  security: PutAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
