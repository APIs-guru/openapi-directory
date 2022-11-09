import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=exp-api-key" })
  apiKey: string;
}


export class SchemeLegacyApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=apiKey" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: SchemeApiKey;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  legacyApiKey: SchemeLegacyApiKey;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
