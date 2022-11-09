import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSecurityRefreshSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwtRefresh: shared.SchemeJwtRefresh;
}


export class PostSecurityRefreshRequest extends SpeakeasyBase {
  @Metadata()
  security: PostSecurityRefreshSecurity;
}


export class PostSecurityRefresh200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;
}


export class PostSecurityRefresh401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityRefresh500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityRefreshResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSecurityRefresh200ApplicationJsonObject?: PostSecurityRefresh200ApplicationJson;

  @Metadata()
  postSecurityRefresh401ApplicationJsonObject?: PostSecurityRefresh401ApplicationJson;

  @Metadata()
  postSecurityRefresh500ApplicationJsonObject?: PostSecurityRefresh500ApplicationJson;

  @Metadata()
  statusCode: number;
}
