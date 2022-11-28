import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).
**/
export declare class GroupNotice extends SpeakeasyBase {
    content?: string;
    date?: Date;
    groupId?: string;
    noticeId?: string;
    title?: string;
}
