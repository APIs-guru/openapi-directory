import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagWikisLastBodyEditorBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class TagWikisLastBodyEditor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: TagWikisLastBodyEditorBadgeCounts;

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


export class TagWikisLastExcerptEditorBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class TagWikisLastExcerptEditor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: TagWikisLastExcerptEditorBadgeCounts;

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


export class TagWikis extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  bodyLastEditDate?: number;

  @SpeakeasyMetadata()
  excerpt?: string;

  @SpeakeasyMetadata()
  excerptLastEditDate?: number;

  @SpeakeasyMetadata()
  lastBodyEditor?: TagWikisLastBodyEditor;

  @SpeakeasyMetadata()
  lastExcerptEditor?: TagWikisLastExcerptEditor;

  @SpeakeasyMetadata()
  tagName?: string;
}
