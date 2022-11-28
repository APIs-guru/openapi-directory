import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotificationsSiteStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class NotificationsSite extends SpeakeasyBase {
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
  styling?: NotificationsSiteStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}


export class Notifications extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  isUnread?: boolean;

  @SpeakeasyMetadata()
  notificationType?: string;

  @SpeakeasyMetadata()
  postId?: number;

  @SpeakeasyMetadata()
  site?: NotificationsSite;
}
