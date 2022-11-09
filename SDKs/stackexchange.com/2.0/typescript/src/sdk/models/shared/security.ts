import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOauth20 extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
