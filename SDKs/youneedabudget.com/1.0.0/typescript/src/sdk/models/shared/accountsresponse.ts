import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



export class AccountsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts: Account[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class AccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: AccountsResponseData;
}
