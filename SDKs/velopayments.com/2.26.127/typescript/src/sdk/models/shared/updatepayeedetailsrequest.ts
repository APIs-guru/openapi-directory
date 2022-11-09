import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PayeeAddress } from "./payeeaddress";
import { Challenge } from "./challenge";
import { Company } from "./company";
import { Individual } from "./individual";
import { PayeeTypeEnum } from "./payeetypeenum";


export class UpdatePayeeDetailsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PayeeAddress;

  @Metadata({ data: "json, name=challenge" })
  challenge?: Challenge;

  @Metadata({ data: "json, name=company" })
  company?: Company;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=individual" })
  individual?: Individual;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: PayeeTypeEnum;
}
