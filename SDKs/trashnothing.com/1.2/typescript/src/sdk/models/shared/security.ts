import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeOauth2Implicit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOauth2Code extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: SchemeOauth2Code;
}


export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=api_key" })
  apiKey: string;
}
