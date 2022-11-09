import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @Metadata()
  queryParams: GetAnnotationLayerPkAnnotationAnnotationIdQueryParams;

  @Metadata()
  security: GetAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiGet;
}


export class GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;

  @Metadata()
  getAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
