import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeClientId extends SpeakeasyBase {
  @Metadata({ data: "security, name=PLAID-CLIENT-ID" })
  apiKey: string;
}


export class SchemePlaidVersion extends SpeakeasyBase {
  @Metadata({ data: "security, name=Plaid-Version" })
  apiKey: string;
}


export class SchemeSecret extends SpeakeasyBase {
  @Metadata({ data: "security, name=PLAID-SECRET" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: SchemeClientId;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  plaidVersion: SchemePlaidVersion;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  secret: SchemeSecret;
}
