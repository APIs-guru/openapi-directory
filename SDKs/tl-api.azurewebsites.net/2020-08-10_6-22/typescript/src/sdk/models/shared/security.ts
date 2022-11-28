import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeBearer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  bearer: SchemeBearer;
}


export class SchemeApikey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Ocp-Apim-Subscription-Key" })
  apiKey: string;
}
