import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiTokens extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-API-Token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiTokens: SchemeApiTokens;
}
