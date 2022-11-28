import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeUsertoken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  usertoken: SchemeUsertoken;
}
