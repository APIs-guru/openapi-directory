import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeJwt extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
