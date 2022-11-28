import { SpeakeasyBase } from "../../../internal/utils";
import { ContactAddressInfo } from "./contactaddressinfo";
import { UserDutyInfo } from "./userdutyinfo";
export declare class UserInfo extends SpeakeasyBase {
    colorIndex?: number;
    contactAddresses?: ContactAddressInfo[];
    dutyInfo?: UserDutyInfo;
    id?: string;
    isDeactivated?: boolean;
    isInvite?: boolean;
    mail?: string;
    name?: string;
    roleId?: string;
    subscriptionId?: string;
    timeZone?: string;
    userImageLastModified?: Date;
}
