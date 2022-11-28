import { SpeakeasyBase } from "../../../internal/utils";
import { InvitedUserInfo } from "./inviteduserinfo";
export declare class UserInvitationResult extends SpeakeasyBase {
    errorCode?: number;
    errorMessage?: string;
    invitedUser?: InvitedUserInfo;
    success?: boolean;
}
