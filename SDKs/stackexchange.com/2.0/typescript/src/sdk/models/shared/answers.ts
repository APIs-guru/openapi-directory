import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnswersLastEditorBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class AnswersLastEditor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: AnswersLastEditorBadgeCounts;

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


export class AnswersOwnerBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class AnswersOwner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: AnswersOwnerBadgeCounts;

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


export class Answers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepted?: boolean;

  @SpeakeasyMetadata()
  answerId?: number;

  @SpeakeasyMetadata()
  awardedBountyAmount?: number;

  @SpeakeasyMetadata()
  awardedBountyUsers?: any[];

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  bodyMarkdown?: string;

  @SpeakeasyMetadata()
  canFlag?: boolean;

  @SpeakeasyMetadata()
  commentCount?: number;

  @SpeakeasyMetadata()
  comments?: any[];

  @SpeakeasyMetadata()
  communityOwnedDate?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  downVoteCount?: number;

  @SpeakeasyMetadata()
  downvoted?: boolean;

  @SpeakeasyMetadata()
  isAccepted?: boolean;

  @SpeakeasyMetadata()
  lastActivityDate?: number;

  @SpeakeasyMetadata()
  lastEditDate?: number;

  @SpeakeasyMetadata()
  lastEditor?: AnswersLastEditor;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  lockedDate?: number;

  @SpeakeasyMetadata()
  owner?: AnswersOwner;

  @SpeakeasyMetadata()
  questionId?: number;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  shareLink?: string;

  @SpeakeasyMetadata()
  tags?: any[];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  upVoteCount?: number;

  @SpeakeasyMetadata()
  upvoted?: boolean;
}
