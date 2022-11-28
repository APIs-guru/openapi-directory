import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostSecurityLoginRequestBodyProviderEnum {
    Db = "db",
    Ldap = "ldap"
}


export class PostSecurityLoginRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: PostSecurityLoginRequestBodyProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=refresh" })
  refresh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


export class PostSecurityLogin200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;
}


export class PostSecurityLogin400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLogin401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLogin500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostSecurityLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostSecurityLoginRequestBody;
}


export class PostSecurityLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postSecurityLogin200ApplicationJsonObject?: PostSecurityLogin200ApplicationJson;

  @SpeakeasyMetadata()
  postSecurityLogin400ApplicationJsonObject?: PostSecurityLogin400ApplicationJson;

  @SpeakeasyMetadata()
  postSecurityLogin401ApplicationJsonObject?: PostSecurityLogin401ApplicationJson;

  @SpeakeasyMetadata()
  postSecurityLogin500ApplicationJsonObject?: PostSecurityLogin500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
