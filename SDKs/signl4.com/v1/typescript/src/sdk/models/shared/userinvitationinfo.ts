import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserInvitationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=inviterId" })
  inviterId?: string;

  @Metadata({ data: "json, name=userMail" })
  userMail?: string;
}
