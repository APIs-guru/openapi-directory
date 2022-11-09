import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeUsertoken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  usertoken: SchemeUsertoken;
}
