import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAnnotationLayerPkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutAnnotationLayerPkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiPut;
}


export class PutAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAnnotationLayerPkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationLayerRestApiPut;

  @SpeakeasyMetadata()
  security: PutAnnotationLayerPkSecurity;
}


export class PutAnnotationLayerPkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAnnotationLayerPk200ApplicationJsonObject?: PutAnnotationLayerPk200ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPk400ApplicationJsonObject?: PutAnnotationLayerPk400ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPk401ApplicationJsonObject?: PutAnnotationLayerPk401ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPk404ApplicationJsonObject?: PutAnnotationLayerPk404ApplicationJson;

  @SpeakeasyMetadata()
  putAnnotationLayerPk500ApplicationJsonObject?: PutAnnotationLayerPk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
