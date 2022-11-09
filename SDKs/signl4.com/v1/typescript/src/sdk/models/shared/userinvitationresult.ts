import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InvitedUserInfo } from "./inviteduserinfo";


export class UserInvitationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=invitedUser" })
  invitedUser?: InvitedUserInfo;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
