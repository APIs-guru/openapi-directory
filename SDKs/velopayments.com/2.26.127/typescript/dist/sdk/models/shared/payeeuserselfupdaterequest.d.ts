import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>All properties are optional</p>
 * <p>Only provided properties will be updated</p>
 * <p>Use null to null out a property that is allowed to be nullable</p>
 *
**/
export declare class PayeeUserSelfUpdateRequest extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    primaryContactNumber?: string;
    secondaryContactNumber?: string;
    smsNumber?: string;
}
