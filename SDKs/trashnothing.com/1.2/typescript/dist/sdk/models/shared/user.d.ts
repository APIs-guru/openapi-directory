import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserFeedback extends SpeakeasyBase {
    percentPositive?: number;
    restriction?: string;
    score?: number;
}
export declare class User extends SpeakeasyBase {
    aboutMe?: string;
    country?: string;
    feedback?: UserFeedback;
    firstname?: string;
    lastname?: string;
    memberSince?: string;
    profileImage?: string;
    replyTime?: number;
    userId?: string;
    username?: string;
}
