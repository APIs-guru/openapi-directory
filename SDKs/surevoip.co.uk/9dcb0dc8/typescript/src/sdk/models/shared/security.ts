import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeBasicAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}


export class SchemeOAuth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2?: SchemeOAuth2;
}


export class SchemeOpenIdConnect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
