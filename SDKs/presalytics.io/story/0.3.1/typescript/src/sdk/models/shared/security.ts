import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
