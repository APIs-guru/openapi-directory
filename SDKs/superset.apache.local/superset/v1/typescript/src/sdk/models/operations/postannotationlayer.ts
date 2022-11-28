import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAnnotationLayerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostAnnotationLayer201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiPost;
}


export class PostAnnotationLayer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationLayerRestApiPost;

  @SpeakeasyMetadata()
  security: PostAnnotationLayerSecurity;
}


export class PostAnnotationLayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAnnotationLayer201ApplicationJsonObject?: PostAnnotationLayer201ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayer400ApplicationJsonObject?: PostAnnotationLayer400ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayer401ApplicationJsonObject?: PostAnnotationLayer401ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayer404ApplicationJsonObject?: PostAnnotationLayer404ApplicationJson;

  @SpeakeasyMetadata()
  postAnnotationLayer500ApplicationJsonObject?: PostAnnotationLayer500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
