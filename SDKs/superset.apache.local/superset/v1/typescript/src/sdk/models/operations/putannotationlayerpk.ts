import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAnnotationLayerPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutAnnotationLayerPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutAnnotationLayerPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAnnotationLayerPkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationLayerRestApiPut;

  @Metadata()
  security: PutAnnotationLayerPkSecurity;
}


export class PutAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiPut;
}


export class PutAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutAnnotationLayerPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putAnnotationLayerPk200ApplicationJsonObject?: PutAnnotationLayerPk200ApplicationJson;

  @Metadata()
  putAnnotationLayerPk400ApplicationJsonObject?: PutAnnotationLayerPk400ApplicationJson;

  @Metadata()
  putAnnotationLayerPk401ApplicationJsonObject?: PutAnnotationLayerPk401ApplicationJson;

  @Metadata()
  putAnnotationLayerPk404ApplicationJsonObject?: PutAnnotationLayerPk404ApplicationJson;

  @Metadata()
  putAnnotationLayerPk500ApplicationJsonObject?: PutAnnotationLayerPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
