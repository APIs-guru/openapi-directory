import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SaveAccount } from "./saveaccount";



export class SaveAccountWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account: SaveAccount;
}
