import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=entityIds" })
  entityIds?: string[];

  @Metadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType: string;
}
