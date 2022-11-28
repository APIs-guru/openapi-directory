import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeRhIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=x-rh-identity" })
  apiKey: string;
}
