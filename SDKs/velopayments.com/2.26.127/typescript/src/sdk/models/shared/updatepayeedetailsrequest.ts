import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PayeeAddress } from "./payeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { IndividualInput } from "./individual";
import { PayeeTypeEnum } from "./payeetypeenum";



export class UpdatePayeeDetailsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PayeeAddress;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: Challenge;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: Company;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=individual" })
  individual?: IndividualInput;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;
}
