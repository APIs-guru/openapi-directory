import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTypeEnum } from "./accounttypeenum";


export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountID" })
  accountId?: string;

  @Metadata({ data: "json, name=Code" })
  code?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: AccountTypeEnum;
}
