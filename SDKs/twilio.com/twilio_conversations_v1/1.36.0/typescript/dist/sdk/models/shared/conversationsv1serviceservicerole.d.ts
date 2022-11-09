import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceRoleEnumRoleTypeEnum } from "./serviceroleenumroletypeenum";
export declare class ConversationsV1ServiceServiceRole extends SpeakeasyBase {
    accountSid?: string;
    chatServiceSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    permissions?: string[];
    sid?: string;
    type?: ServiceRoleEnumRoleTypeEnum;
    url?: string;
}
