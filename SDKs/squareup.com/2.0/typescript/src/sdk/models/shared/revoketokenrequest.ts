import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RevokeTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=revoke_only_access_token" })
  revokeOnlyAccessToken?: boolean;
}
