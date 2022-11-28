import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aboutMe?: string;

  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  accountId?: number;

  @SpeakeasyMetadata()
  age?: number;

  @SpeakeasyMetadata()
  answerCount?: number;

  @SpeakeasyMetadata()
  badgeCounts?: UserBadgeCounts;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  downVoteCount?: number;

  @SpeakeasyMetadata()
  isEmployee?: boolean;

  @SpeakeasyMetadata()
  lastAccessDate?: number;

  @SpeakeasyMetadata()
  lastModifiedDate?: number;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  location?: string;

  @SpeakeasyMetadata()
  profileImage?: string;

  @SpeakeasyMetadata()
  questionCount?: number;

  @SpeakeasyMetadata()
  reputation?: number;

  @SpeakeasyMetadata()
  reputationChangeDay?: number;

  @SpeakeasyMetadata()
  reputationChangeMonth?: number;

  @SpeakeasyMetadata()
  reputationChangeQuarter?: number;

  @SpeakeasyMetadata()
  reputationChangeWeek?: number;

  @SpeakeasyMetadata()
  reputationChangeYear?: number;

  @SpeakeasyMetadata()
  timedPenaltyDate?: number;

  @SpeakeasyMetadata()
  upVoteCount?: number;

  @SpeakeasyMetadata()
  userId?: number;

  @SpeakeasyMetadata()
  userType?: string;

  @SpeakeasyMetadata()
  viewCount?: number;

  @SpeakeasyMetadata()
  websiteUrl?: string;
}
