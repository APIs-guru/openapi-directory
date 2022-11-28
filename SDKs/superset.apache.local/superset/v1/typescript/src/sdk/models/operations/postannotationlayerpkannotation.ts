import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PostAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostAnnotationLayerPkAnnotation201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationRestApiPost;
}


export class PostAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAnnotationLayerPkAnnotationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationRestApiPost;

  @SpeakeasyMetadata()
  security: PostAnnotationLayerPkAnnotationSecurity;
}


export class PostAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAnnotationLayerPkAnnotation201ApplicationJsonObject?: PostAnnotationLayerPkAnnotation201ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayerPkAnnotation400ApplicationJsonObject?: PostAnnotationLayerPkAnnotation400ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayerPkAnnotation401ApplicationJsonObject?: PostAnnotationLayerPkAnnotation401ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayerPkAnnotation404ApplicationJsonObject?: PostAnnotationLayerPkAnnotation404ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayerPkAnnotation500ApplicationJsonObject?: PostAnnotationLayerPkAnnotation500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
