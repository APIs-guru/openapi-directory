import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PayoutNameV3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName: string;
}
