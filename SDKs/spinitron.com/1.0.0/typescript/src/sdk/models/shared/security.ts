import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeHttpBearer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=access-token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  httpBearer?: SchemeHttpBearer;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  accessToken?: SchemeAccessToken;
}
