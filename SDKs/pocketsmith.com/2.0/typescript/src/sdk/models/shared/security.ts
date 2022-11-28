import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDeveloperKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Developer-Key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: SchemeDeveloperKey;
}


export class SchemeOauth2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
