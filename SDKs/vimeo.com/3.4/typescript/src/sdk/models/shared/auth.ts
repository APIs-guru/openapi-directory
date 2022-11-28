import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiApp } from "./apiapp";
import { User } from "./user";


export enum AuthTokenTypeEnum {
    Bearer = "bearer"
}


export class Auth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=app" })
  app: ApiApp;

  @SpeakeasyMetadata({ data: "json, name=expires_on" })
  expiresOn?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: AuthTokenTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
