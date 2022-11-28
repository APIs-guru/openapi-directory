import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserInvitationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inviterId" })
  inviterId?: string;

  @SpeakeasyMetadata({ data: "json, name=userMail" })
  userMail?: string;
}
