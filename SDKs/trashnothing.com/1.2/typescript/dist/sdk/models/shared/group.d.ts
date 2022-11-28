import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the country that is associated with a group.  May be null.
**/
export declare class GroupCountry extends SpeakeasyBase {
    abbreviation?: string;
    name?: string;
}
/**
 * Membership questionnaire data.  Will be null unless the membership status is pending-questions.
**/
export declare class GroupMembershipQuestionnaire extends SpeakeasyBase {
    message?: string;
    questions?: string[];
}
/**
 * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
 *
**/
export declare class GroupMembership extends SpeakeasyBase {
    date?: Date;
    questionnaire?: GroupMembershipQuestionnaire;
    status?: string;
}
/**
 * Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
**/
export declare class GroupRegion extends SpeakeasyBase {
    abbreviation?: string;
    name?: string;
}
/**
 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
 *
**/
export declare class Group extends SpeakeasyBase {
    country?: GroupCountry;
    groupId?: string;
    hasQuestions?: boolean;
    homepage?: string;
    identifier?: string;
    latitude?: number;
    longitude?: number;
    memberCount?: number;
    membership?: GroupMembership;
    name?: string;
    openArchives?: boolean;
    openMembership?: boolean;
    region?: GroupRegion;
    timezone?: string;
    utcOffset?: number;
}
