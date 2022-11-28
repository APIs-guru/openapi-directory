import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeApiKeyHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Ocp-Apim-Subscription-Key" })
  apiKey: string;
}


export class SchemeApiKeyQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader?: SchemeApiKeyHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKeyQuery?: SchemeApiKeyQuery;
}
