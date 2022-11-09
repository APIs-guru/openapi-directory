import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AuthenticationTokenResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;
}


export class AuthenticationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: AuthenticationTokenResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
