import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuggestedEditsProposingUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class SuggestedEditsProposingUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: SuggestedEditsProposingUserBadgeCounts;

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


export class SuggestedEdits extends SpeakeasyBase {
  @SpeakeasyMetadata()
  approvalDate?: number;

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  comment?: string;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  postType?: string;

  @SpeakeasyMetadata()
  proposingUser?: SuggestedEditsProposingUser;

  @SpeakeasyMetadata()
  rejectionDate?: number;

  @SpeakeasyMetadata()
  suggestedEditId?: number;

  @SpeakeasyMetadata()
  tags?: any[];

  @SpeakeasyMetadata()
  title?: string;
}
