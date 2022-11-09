import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemePaylocityAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
