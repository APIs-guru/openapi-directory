import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The emergency contact model
**/
export declare class EmergencyContact extends SpeakeasyBase {
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    county?: string;
    email?: string;
    firstName: string;
    homePhone?: string;
    lastName: string;
    mobilePhone?: string;
    notes?: string;
    pager?: string;
    primaryPhone?: string;
    priority?: string;
    relationship?: string;
    state?: string;
    syncEmployeeInfo?: boolean;
    workExtension?: string;
    workPhone?: string;
    zip?: string;
}
