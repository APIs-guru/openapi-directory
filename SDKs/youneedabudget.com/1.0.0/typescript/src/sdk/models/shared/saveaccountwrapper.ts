import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SaveAccount } from "./saveaccount";


export class SaveAccountWrapper extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account: SaveAccount;
}
