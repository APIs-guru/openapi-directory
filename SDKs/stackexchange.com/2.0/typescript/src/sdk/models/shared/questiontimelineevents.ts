import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuestionTimelineEventsOwnerBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class QuestionTimelineEventsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: QuestionTimelineEventsOwnerBadgeCounts;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  profileImage?: string;

  @SpeakeasyMetadata()
  reputation?: number;

  @SpeakeasyMetadata()
  userId?: number;

  @SpeakeasyMetadata()
  userType?: string;
}


export class QuestionTimelineEventsUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class QuestionTimelineEventsUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: QuestionTimelineEventsUserBadgeCounts;

  @SpeakeasyMetadata()
  displayName?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  profileImage?: string;

  @SpeakeasyMetadata()
  reputation?: number;

  @SpeakeasyMetadata()
  userId?: number;

  @SpeakeasyMetadata()
  userType?: string;
}


export class QuestionTimelineEvents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentId?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  downVoteCount?: number;

  @SpeakeasyMetadata()
  owner?: QuestionTimelineEventsOwner;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  questionId?: number;

  @SpeakeasyMetadata()
  revisionGuid?: string;

  @SpeakeasyMetadata()
  timelineType?: string;

  @SpeakeasyMetadata()
  upVoteCount?: number;

  @SpeakeasyMetadata()
  user?: QuestionTimelineEventsUser;
}
