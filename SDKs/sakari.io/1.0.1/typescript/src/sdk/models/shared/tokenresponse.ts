import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}
