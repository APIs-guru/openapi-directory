import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenerateAccessTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}
