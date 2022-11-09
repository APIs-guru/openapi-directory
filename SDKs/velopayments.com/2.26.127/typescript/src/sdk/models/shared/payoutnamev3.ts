import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PayoutNameV3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName: string;

  @Metadata({ data: "json, name=lastName" })
  lastName: string;
}
