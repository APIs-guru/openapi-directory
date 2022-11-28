import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInvite } from "./userinvite";



export class UsersInvitation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inviterId" })
  inviterId?: string;

  @SpeakeasyMetadata({ data: "json, name=invites", elemType: UserInvite })
  invites?: UserInvite[];
}
