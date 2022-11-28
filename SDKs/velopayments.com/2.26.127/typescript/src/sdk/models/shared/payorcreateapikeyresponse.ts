import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayorCreateApiKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "json, name=apiSecret" })
  apiSecret?: string;
}
