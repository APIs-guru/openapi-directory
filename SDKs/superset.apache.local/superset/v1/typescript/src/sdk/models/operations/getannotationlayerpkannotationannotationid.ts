import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiGet;
}


export class GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAnnotationLayerPkAnnotationAnnotationIdQueryParams;

  @SpeakeasyMetadata()
  security: GetAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;

  @SpeakeasyMetadata()
  getAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
