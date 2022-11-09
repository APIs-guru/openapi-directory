import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeSakariAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
