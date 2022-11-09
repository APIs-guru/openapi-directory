import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeDeveloperKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Developer-Key" })
  apiKey: string;
}


export class SchemeOauth2 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  developerKey: SchemeDeveloperKey;
}
