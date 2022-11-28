import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTypeEnum } from "./accounttypeenum";



export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountID" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: AccountTypeEnum;
}
