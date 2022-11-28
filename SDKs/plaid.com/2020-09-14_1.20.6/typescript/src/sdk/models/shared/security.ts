import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeClientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=PLAID-CLIENT-ID" })
  apiKey: string;
}


export class SchemePlaidVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Plaid-Version" })
  apiKey: string;
}


export class SchemeSecret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=PLAID-SECRET" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: SchemeClientId;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  plaidVersion: SchemePlaidVersion;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  secret: SchemeSecret;
}
