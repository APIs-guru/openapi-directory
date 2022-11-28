import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeBearerToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
