import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSavedQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostSavedQuery201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.SavedQueryRestApiPost;
}


export class PostSavedQuery400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQuery500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSavedQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SavedQueryRestApiPost;

  @SpeakeasyMetadata()
  security: PostSavedQuerySecurity;
}


export class PostSavedQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSavedQuery201ApplicationJsonObject?: PostSavedQuery201ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQuery400ApplicationJsonObject?: PostSavedQuery400ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQuery401ApplicationJsonObject?: PostSavedQuery401ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQuery422ApplicationJsonObject?: PostSavedQuery422ApplicationJson;

  @SpeakeasyMetadata()
  postSavedQuery500ApplicationJsonObject?: PostSavedQuery500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
