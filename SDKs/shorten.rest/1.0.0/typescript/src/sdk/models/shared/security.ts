import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeApiKeyAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-api-key" })
  apiKey: string;
}
