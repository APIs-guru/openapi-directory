import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOAuth2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeBasicAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeOAuthVeloBackOffice extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: SchemeOAuth2;
}
