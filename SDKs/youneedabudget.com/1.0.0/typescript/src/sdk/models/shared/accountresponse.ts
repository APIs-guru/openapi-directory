import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";


export class AccountResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: Account;
}


export class AccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: AccountResponseData;
}
