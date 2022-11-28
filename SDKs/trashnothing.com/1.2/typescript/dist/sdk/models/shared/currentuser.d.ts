import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data related to the users' email address.
**/
export declare class CurrentUserEmail extends SpeakeasyBase {
    address?: string;
    bouncing?: boolean;
    spamStop?: boolean;
}
export declare class CurrentUserFeedback extends SpeakeasyBase {
    percentPositive?: number;
    restriction?: string;
    score?: number;
}
/**
 * The users' location.  The location is used to determine which posts are shown to the user (may be null).
**/
export declare class CurrentUserLocation extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    name?: string;
    radius?: number;
}
/**
 * Location data used by the user the last time they posted.
**/
export declare class CurrentUserPostLocation extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class CurrentUser extends SpeakeasyBase {
    aboutMe?: string;
    country?: string;
    digest?: string;
    digestPhotos?: boolean;
    email?: CurrentUserEmail;
    feedback?: CurrentUserFeedback;
    firstname?: string;
    hasPassword?: boolean;
    lastListingsView?: Date;
    lastname?: string;
    location?: CurrentUserLocation;
    memberSince?: string;
    postLocation?: CurrentUserPostLocation;
    postReminders?: boolean;
    profileImage?: string;
    profileImageSource?: string;
    publicName?: boolean;
    publicPostSources?: string[];
    replyTime?: number;
    showAllGroupPosts?: boolean;
    signup?: Date;
    specialNotices?: boolean;
    userId?: string;
    username?: string;
    usesFairOfferPolicy?: boolean;
    verified?: boolean;
}
