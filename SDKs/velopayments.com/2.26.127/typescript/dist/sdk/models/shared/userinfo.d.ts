import { SpeakeasyBase } from "../../../internal/utils";
import { MfaDetails } from "./mfadetails";
import { UserType2Enum } from "./usertype2enum";
export declare class UserInfo extends SpeakeasyBase {
    mfaDetails?: MfaDetails;
    userType?: UserType2Enum;
    userId?: string;
}
