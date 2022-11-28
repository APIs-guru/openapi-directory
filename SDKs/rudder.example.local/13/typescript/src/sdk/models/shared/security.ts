import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiTokens extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-API-Token" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiTokens: SchemeApiTokens;
}
