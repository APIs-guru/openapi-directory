import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeCookie extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Cookie" })
  apiKey: string;
}
