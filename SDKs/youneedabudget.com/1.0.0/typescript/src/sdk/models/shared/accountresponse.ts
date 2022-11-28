import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



export class AccountResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: Account;
}


export class AccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AccountResponseData;
}
