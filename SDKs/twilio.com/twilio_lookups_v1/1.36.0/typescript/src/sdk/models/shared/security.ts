import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeAccountSidAuthToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
