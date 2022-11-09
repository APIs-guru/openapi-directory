import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSecurityLoginRequestBodyProviderEnum {
    Db = "db"
,    Ldap = "ldap"
}


export class PostSecurityLoginRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: PostSecurityLoginRequestBodyProviderEnum;

  @Metadata({ data: "json, name=refresh" })
  refresh?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}


export class PostSecurityLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostSecurityLoginRequestBody;
}


export class PostSecurityLogin200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;
}


export class PostSecurityLogin400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLogin401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLogin500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postSecurityLogin200ApplicationJsonObject?: PostSecurityLogin200ApplicationJson;

  @Metadata()
  postSecurityLogin400ApplicationJsonObject?: PostSecurityLogin400ApplicationJson;

  @Metadata()
  postSecurityLogin401ApplicationJsonObject?: PostSecurityLogin401ApplicationJson;

  @Metadata()
  postSecurityLogin500ApplicationJsonObject?: PostSecurityLogin500ApplicationJson;

  @Metadata()
  statusCode: number;
}
