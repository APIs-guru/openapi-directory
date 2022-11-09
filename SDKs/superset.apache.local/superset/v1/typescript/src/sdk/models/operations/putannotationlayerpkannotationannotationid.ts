import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationRestApiPut;

  @Metadata()
  security: PutAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiPut;
}


export class PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @Metadata()
  putAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;

  @Metadata()
  putAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;

  @Metadata()
  putAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @Metadata()
  putAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
