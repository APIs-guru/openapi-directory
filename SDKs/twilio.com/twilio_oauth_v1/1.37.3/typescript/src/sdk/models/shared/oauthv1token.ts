import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OauthV1Token extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=access_token_expires_at" })
  accessTokenExpiresAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id_token" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token_expires_at" })
  refreshTokenExpiresAt?: Date;
}
