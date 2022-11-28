import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AuthenticationTokenResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}


export class AuthenticationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AuthenticationTokenResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
