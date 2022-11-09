import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MfaDetails } from "./mfadetails";
import { UserType2Enum } from "./usertype2enum";


export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=mfa_details" })
  mfaDetails?: MfaDetails;

  @Metadata({ data: "json, name=userType" })
  userType?: UserType2Enum;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
