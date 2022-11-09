import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApiApp } from "./apiapp";
import { User } from "./user";

export enum AuthTokenTypeEnum {
    Bearer = "bearer"
}


export class Auth extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=app" })
  app: ApiApp;

  @Metadata({ data: "json, name=expires_on" })
  expiresOn?: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=scope" })
  scope: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType: AuthTokenTypeEnum;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
