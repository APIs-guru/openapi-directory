import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaDetails } from "./mfadetails";
import { UserType2Enum } from "./usertype2enum";



export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mfa_details" })
  mfaDetails?: MfaDetails;

  @SpeakeasyMetadata({ data: "json, name=userType" })
  userType?: UserType2Enum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
