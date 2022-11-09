import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


export class AccountsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts: Account[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;
}


export class AccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: AccountsResponseData;
}
