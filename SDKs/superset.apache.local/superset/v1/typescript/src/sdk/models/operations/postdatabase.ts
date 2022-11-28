import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatabaseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabase201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DatabaseRestApiPost;
}


export class PostDatabase400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseRestApiPost;

  @SpeakeasyMetadata()
  security: PostDatabaseSecurity;
}


export class PostDatabaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDatabase201ApplicationJsonObject?: PostDatabase201ApplicationJson;

  @SpeakeasyMetadata()
  postDatabase400ApplicationJsonObject?: PostDatabase400ApplicationJson;

  @SpeakeasyMetadata()
  postDatabase401ApplicationJsonObject?: PostDatabase401ApplicationJson;

  @SpeakeasyMetadata()
  postDatabase404ApplicationJsonObject?: PostDatabase404ApplicationJson;

  @SpeakeasyMetadata()
  postDatabase500ApplicationJsonObject?: PostDatabase500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
