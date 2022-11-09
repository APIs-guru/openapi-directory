import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeCookie extends SpeakeasyBase {
  @Metadata({ data: "security, name=Cookie" })
  apiKey: string;
}
