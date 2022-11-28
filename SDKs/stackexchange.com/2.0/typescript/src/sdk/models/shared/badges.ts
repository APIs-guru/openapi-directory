import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BadgesUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class BadgesUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: BadgesUserBadgeCounts;

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


export class Badges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awardCount?: number;

  @SpeakeasyMetadata()
  badgeId?: number;

  @SpeakeasyMetadata()
  badgeType?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  rank?: string;

  @SpeakeasyMetadata()
  user?: BadgesUser;
}
