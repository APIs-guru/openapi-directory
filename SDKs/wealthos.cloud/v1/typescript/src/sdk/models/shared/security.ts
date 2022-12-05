import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiPubKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class SchemeApiSecretKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-api-key" })
  apiKey: string;
}


export class SchemeWsSecretKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-token" })
  apiKey: string;
}
