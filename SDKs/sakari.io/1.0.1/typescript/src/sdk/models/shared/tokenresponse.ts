import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType?: string;
}
