import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RenewTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=plan_id" })
  planId?: string;

  @Metadata({ data: "json, name=subscription_id" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}
