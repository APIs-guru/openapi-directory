import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeRhIdentity extends SpeakeasyBase {
  @Metadata({ data: "security, name=x-rh-identity" })
  apiKey: string;
}
