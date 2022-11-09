import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyHeader extends SpeakeasyBase {
  @Metadata({ data: "security, name=Ocp-Apim-Subscription-Key" })
  apiKey: string;
}


export class SchemeApiKeyQuery extends SpeakeasyBase {
  @Metadata({ data: "security, name=subscription-key" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: SchemeApiKeyHeader;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyQuery: SchemeApiKeyQuery;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;
}
