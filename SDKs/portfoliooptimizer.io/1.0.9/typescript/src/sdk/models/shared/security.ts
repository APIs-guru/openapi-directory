import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-API-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: SchemeApiKeyAuth;
}
