import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostsLastEditorBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class PostsLastEditor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: PostsLastEditorBadgeCounts;

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


export class PostsOwnerBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class PostsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: PostsOwnerBadgeCounts;

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


export class Posts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  bodyMarkdown?: string;

  @SpeakeasyMetadata()
  commentCount?: number;

  @SpeakeasyMetadata()
  comments?: any[];

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  downVoteCount?: number;

  @SpeakeasyMetadata()
  downvoted?: boolean;

  @SpeakeasyMetadata()
  lastActivityDate?: number;

  @SpeakeasyMetadata()
  lastEditDate?: number;

  @SpeakeasyMetadata()
  lastEditor?: PostsLastEditor;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  owner?: PostsOwner;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  shareLink?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  upVoteCount?: number;

  @SpeakeasyMetadata()
  upvoted?: boolean;
}
