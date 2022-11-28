import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemePaylocityAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
