import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_secret" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=grant_type" })
  grantType?: string;
}
