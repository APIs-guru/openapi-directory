import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeSakariAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
