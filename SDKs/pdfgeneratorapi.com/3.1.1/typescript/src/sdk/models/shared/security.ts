import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeJsonWebTokenAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jsonWebTokenAuth: SchemeJsonWebTokenAuth;
}
