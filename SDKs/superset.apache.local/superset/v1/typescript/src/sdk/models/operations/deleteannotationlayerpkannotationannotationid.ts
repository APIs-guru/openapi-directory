import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @Metadata()
  security: DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;

  @Metadata()
  deleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
