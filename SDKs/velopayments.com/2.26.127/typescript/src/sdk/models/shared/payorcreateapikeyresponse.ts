import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayorCreateApiKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=apiSecret" })
  apiSecret?: string;
}
