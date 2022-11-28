import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InboxItemsSiteStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class InboxItemsSite extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aliases?: any[];

  @SpeakeasyMetadata()
  apiSiteParameter?: string;

  @SpeakeasyMetadata()
  audience?: string;

  @SpeakeasyMetadata()
  closedBetaDate?: number;

  @SpeakeasyMetadata()
  faviconUrl?: string;

  @SpeakeasyMetadata()
  highResolutionIconUrl?: string;

  @SpeakeasyMetadata()
  iconUrl?: string;

  @SpeakeasyMetadata()
  launchDate?: number;

  @SpeakeasyMetadata()
  logoUrl?: string;

  @SpeakeasyMetadata()
  markdownExtensions?: any[];

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  openBetaDate?: number;

  @SpeakeasyMetadata()
  relatedSites?: any[];

  @SpeakeasyMetadata()
  siteState?: string;

  @SpeakeasyMetadata()
  siteType?: string;

  @SpeakeasyMetadata()
  siteUrl?: string;

  @SpeakeasyMetadata()
  styling?: InboxItemsSiteStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}


export class InboxItems extends SpeakeasyBase {
  @SpeakeasyMetadata()
  answerId?: number;

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  commentId?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  isUnread?: boolean;

  @SpeakeasyMetadata()
  itemType?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  questionId?: number;

  @SpeakeasyMetadata()
  site?: InboxItemsSite;

  @SpeakeasyMetadata()
  title?: string;
}
