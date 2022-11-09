import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSavedQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostSavedQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SavedQueryRestApiPost;

  @Metadata()
  security: PostSavedQuerySecurity;
}


export class PostSavedQuery201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiPost;
}


export class PostSavedQuery400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSavedQuery201ApplicationJsonObject?: PostSavedQuery201ApplicationJson;

  @Metadata()
  postSavedQuery400ApplicationJsonObject?: PostSavedQuery400ApplicationJson;

  @Metadata()
  postSavedQuery401ApplicationJsonObject?: PostSavedQuery401ApplicationJson;

  @Metadata()
  postSavedQuery422ApplicationJsonObject?: PostSavedQuery422ApplicationJson;

  @Metadata()
  postSavedQuery500ApplicationJsonObject?: PostSavedQuery500ApplicationJson;

  @Metadata()
  statusCode: number;
}
