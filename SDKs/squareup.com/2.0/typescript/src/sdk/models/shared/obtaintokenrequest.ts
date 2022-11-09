import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObtainTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType: string;

  @Metadata({ data: "json, name=migration_token" })
  migrationToken?: string;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=short_lived" })
  shortLived?: boolean;
}
