import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyHeader extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-api-key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: SchemeApiKeyHeader;
}
