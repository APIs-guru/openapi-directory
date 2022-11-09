import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApikey extends SpeakeasyBase {
  @Metadata({ data: "security, name=Ocp-Apim-Subscription-Key" })
  apiKey: string;
}


export class SchemeBearer extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  bearer: SchemeBearer;
}
