import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeAccessToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=access-token" })
  apiKey: string;
}


export class SchemeHttpBearer extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  httpBearer: SchemeHttpBearer;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  accessToken: SchemeAccessToken;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
