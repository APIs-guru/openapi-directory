import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeDefault extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
