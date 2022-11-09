import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ObtainTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=id_token" })
  idToken?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=plan_id" })
  planId?: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken?: string;

  @Metadata({ data: "json, name=short_lived" })
  shortLived?: boolean;

  @Metadata({ data: "json, name=subscription_id" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}
