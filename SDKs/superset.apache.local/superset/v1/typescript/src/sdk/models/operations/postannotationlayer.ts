import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAnnotationLayerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostAnnotationLayerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AnnotationLayerRestApiPost;

  @Metadata()
  security: PostAnnotationLayerSecurity;
}


export class PostAnnotationLayer201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.AnnotationLayerRestApiPost;
}


export class PostAnnotationLayer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostAnnotationLayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAnnotationLayer201ApplicationJsonObject?: PostAnnotationLayer201ApplicationJson;

  @Metadata()
  postAnnotationLayer400ApplicationJsonObject?: PostAnnotationLayer400ApplicationJson;

  @Metadata()
  postAnnotationLayer401ApplicationJsonObject?: PostAnnotationLayer401ApplicationJson;

  @Metadata()
  postAnnotationLayer404ApplicationJsonObject?: PostAnnotationLayer404ApplicationJson;

  @Metadata()
  postAnnotationLayer500ApplicationJsonObject?: PostAnnotationLayer500ApplicationJson;

  @Metadata()
  statusCode: number;
}
