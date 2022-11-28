import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress2 } from "./payeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { Individual2Input } from "./individual2";
import { PayeeTypeEnum } from "./payeetypeenum";



export class UpdatePayeeDetailsRequest2Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayeeAddress2;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge2;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company2;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: Individual2Input;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;
}
