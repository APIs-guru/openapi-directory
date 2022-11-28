import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvitedUserInfo } from "./inviteduserinfo";



export class UserInvitationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=invitedUser" })
  invitedUser?: InvitedUserInfo;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
