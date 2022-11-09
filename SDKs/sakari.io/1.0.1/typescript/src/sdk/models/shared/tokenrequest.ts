import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @Metadata({ data: "json, name=grant_type" })
  grantType?: string;
}
