import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommentsOwnerBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class CommentsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: CommentsOwnerBadgeCounts;

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


export class CommentsReplyToUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class CommentsReplyToUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: CommentsReplyToUserBadgeCounts;

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


export class Comments extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  bodyMarkdown?: string;

  @SpeakeasyMetadata()
  canFlag?: boolean;

  @SpeakeasyMetadata()
  commentId?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  edited?: boolean;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  owner?: CommentsOwner;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  replyToUser?: CommentsReplyToUser;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  upvoted?: boolean;
}
