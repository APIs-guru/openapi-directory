import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleEnumRoleTypeEnum } from "./roleenumroletypeenum";
export declare class ChatV1ServiceRole extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    permissions?: string[];
    serviceSid?: string;
    sid?: string;
    type?: RoleEnumRoleTypeEnum;
    url?: string;
}
