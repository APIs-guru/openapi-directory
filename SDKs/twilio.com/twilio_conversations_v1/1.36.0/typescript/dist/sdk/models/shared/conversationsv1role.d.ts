import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoleEnumRoleTypeEnum } from "./roleenumroletypeenum";
export declare class ConversationsV1Role extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    permissions?: string[];
    sid?: string;
    type?: RoleEnumRoleTypeEnum;
    url?: string;
}
