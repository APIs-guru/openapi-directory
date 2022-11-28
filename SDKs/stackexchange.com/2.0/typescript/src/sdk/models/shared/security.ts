import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeOauth20 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
