import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserInvite } from "./userinvite";


export class UsersInvitation extends SpeakeasyBase {
  @Metadata({ data: "json, name=inviterId" })
  inviterId?: string;

  @Metadata({ data: "json, name=invites", elemType: shared.UserInvite })
  invites?: UserInvite[];
}
