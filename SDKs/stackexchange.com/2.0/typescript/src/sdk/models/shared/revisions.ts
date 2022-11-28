import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RevisionsUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class RevisionsUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: RevisionsUserBadgeCounts;

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


export class Revisions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  isRollback?: boolean;

  @SpeakeasyMetadata()
  lastBody?: string;

  @SpeakeasyMetadata()
  lastTags?: any[];

  @SpeakeasyMetadata()
  lastTitle?: string;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  revisionGuid?: string;

  @SpeakeasyMetadata()
  revisionNumber?: number;

  @SpeakeasyMetadata()
  revisionType?: string;

  @SpeakeasyMetadata()
  setCommunityWiki?: boolean;

  @SpeakeasyMetadata()
  tags?: any[];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  user?: RevisionsUser;
}
