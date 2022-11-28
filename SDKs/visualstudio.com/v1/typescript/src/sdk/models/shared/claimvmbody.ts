import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserIdentity } from "./useridentity";



export class ClaimVmBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: UserIdentity;
}
