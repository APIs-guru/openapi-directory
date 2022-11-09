import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GroupCountry
/** 
 * Provides information about the country that is associated with a group.  May be null.
**/
export class GroupCountry extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// GroupMembershipQuestionnaire
/** 
 * Membership questionnaire data.  Will be null unless the membership status is pending-questions.
**/
export class GroupMembershipQuestionnaire extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=questions" })
  questions?: string[];
}


// GroupMembership
/** 
 * Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
 * 
**/
export class GroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=questionnaire" })
  questionnaire?: GroupMembershipQuestionnaire;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// GroupRegion
/** 
 * Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
**/
export class GroupRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=abbreviation" })
  abbreviation?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// Group
/** 
 * Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
 * 
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: GroupCountry;

  @Metadata({ data: "json, name=group_id" })
  groupId?: string;

  @Metadata({ data: "json, name=has_questions" })
  hasQuestions?: boolean;

  @Metadata({ data: "json, name=homepage" })
  homepage?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=member_count" })
  memberCount?: number;

  @Metadata({ data: "json, name=membership" })
  membership?: GroupMembership;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=open_archives" })
  openArchives?: boolean;

  @Metadata({ data: "json, name=open_membership" })
  openMembership?: boolean;

  @Metadata({ data: "json, name=region" })
  region?: GroupRegion;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=utc_offset" })
  utcOffset?: number;
}
