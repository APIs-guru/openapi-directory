import { SpeakeasyBase } from "../../../internal/utils";
import { MfaTypeEnum } from "./mfatypeenum";
/**
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 *
**/
export declare class UserDetailsUpdateRequest extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    mfaType?: MfaTypeEnum;
    primaryContactNumber?: string;
    secondaryContactNumber?: string;
    smsNumber?: string;
    verificationCode?: string;
}
