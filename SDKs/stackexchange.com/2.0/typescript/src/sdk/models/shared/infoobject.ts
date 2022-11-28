import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InfoObjectSiteStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class InfoObjectSite extends SpeakeasyBase {
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
  styling?: InfoObjectSiteStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}


export class InfoObject extends SpeakeasyBase {
  @SpeakeasyMetadata()
  answersPerMinute?: number;

  @SpeakeasyMetadata()
  apiRevision?: string;

  @SpeakeasyMetadata()
  badgesPerMinute?: number;

  @SpeakeasyMetadata()
  newActiveUsers?: number;

  @SpeakeasyMetadata()
  questionsPerMinute?: number;

  @SpeakeasyMetadata()
  site?: InfoObjectSite;

  @SpeakeasyMetadata()
  totalAccepted?: number;

  @SpeakeasyMetadata()
  totalAnswers?: number;

  @SpeakeasyMetadata()
  totalBadges?: number;

  @SpeakeasyMetadata()
  totalComments?: number;

  @SpeakeasyMetadata()
  totalQuestions?: number;

  @SpeakeasyMetadata()
  totalUnanswered?: number;

  @SpeakeasyMetadata()
  totalUsers?: number;

  @SpeakeasyMetadata()
  totalVotes?: number;
}
