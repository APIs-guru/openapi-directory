import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SitesStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class Sites extends SpeakeasyBase {
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
  styling?: SitesStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}
