import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDeveloperKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-api-key" })
  apiKey: string;
}
