import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: number[];
}


export class DeleteAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnnotationLayerPkAnnotationPathParams;

  @Metadata()
  queryParams: DeleteAnnotationLayerPkAnnotationQueryParams;

  @Metadata()
  security: DeleteAnnotationLayerPkAnnotationSecurity;
}


export class DeleteAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAnnotationLayerPkAnnotation200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation200ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotation401ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation401ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotation404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation404ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotation422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation422ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotation500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation500ApplicationJson;

  @Metadata()
  statusCode: number;
}
