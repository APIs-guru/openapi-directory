import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=exp-api-key" })
  apiKey: string;
}


export class SchemeLegacyApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=apiKey" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  legacyApiKey?: SchemeLegacyApiKey;
}
