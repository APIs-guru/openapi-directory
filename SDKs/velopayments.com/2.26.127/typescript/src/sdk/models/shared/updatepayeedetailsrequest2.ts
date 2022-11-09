import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayeeAddress2 } from "./payeeaddress2";
import { Challenge2 } from "./challenge2";
import { Company2 } from "./company2";
import { Individual2 } from "./individual2";
import { PayeeTypeEnum } from "./payeetypeenum";


export class UpdatePayeeDetailsRequest2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PayeeAddress2;

  @Metadata({ data: "json, name=challenge" })
  challenge?: Challenge2;

  @Metadata({ data: "json, name=company" })
  company?: Company2;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=individual" })
  individual?: Individual2;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;
}
