import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=annotation_id" })
  annotationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity;
}


export class DeleteAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;

  @SpeakeasyMetadata()
  deleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
