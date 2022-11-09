import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PostAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAnnotationLayerPkAnnotationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationRestApiPost;

  @Metadata()
  security: PostAnnotationLayerPkAnnotationSecurity;
}


export class PostAnnotationLayerPkAnnotation201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiPost;
}


export class PostAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAnnotationLayerPkAnnotation201ApplicationJsonObject?: PostAnnotationLayerPkAnnotation201ApplicationJson;

  @Metadata()
  postAnnotationLayerPkAnnotation400ApplicationJsonObject?: PostAnnotationLayerPkAnnotation400ApplicationJson;

  @Metadata()
  postAnnotationLayerPkAnnotation401ApplicationJsonObject?: PostAnnotationLayerPkAnnotation401ApplicationJson;

  @Metadata()
  postAnnotationLayerPkAnnotation404ApplicationJsonObject?: PostAnnotationLayerPkAnnotation404ApplicationJson;

  @Metadata()
  postAnnotationLayerPkAnnotation500ApplicationJsonObject?: PostAnnotationLayerPkAnnotation500ApplicationJson;

  @Metadata()
  statusCode: number;
}
