import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagScoreObjectsUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class TagScoreObjectsUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: TagScoreObjectsUserBadgeCounts;

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


export class TagScoreObjects extends SpeakeasyBase {
  @SpeakeasyMetadata()
  postCount?: number;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  user?: TagScoreObjectsUser;
}
