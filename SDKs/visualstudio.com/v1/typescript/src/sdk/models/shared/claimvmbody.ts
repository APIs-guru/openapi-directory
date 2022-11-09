import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserIdentity } from "./useridentity";


export class ClaimVmBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user: UserIdentity;
}
