import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeBearerToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
