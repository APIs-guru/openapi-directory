import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeDefault extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
