import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuestionsBountyUserBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class QuestionsBountyUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: QuestionsBountyUserBadgeCounts;

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


export class QuestionsClosedDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  byUsers?: any[];

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  onHold?: boolean;

  @SpeakeasyMetadata()
  originalQuestions?: any[];

  @SpeakeasyMetadata()
  reason?: string;
}


export class QuestionsLastEditorBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class QuestionsLastEditor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: QuestionsLastEditorBadgeCounts;

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


export class QuestionsMigratedFromOtherSiteStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class QuestionsMigratedFromOtherSite extends SpeakeasyBase {
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
  styling?: QuestionsMigratedFromOtherSiteStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}


export class QuestionsMigratedFrom extends SpeakeasyBase {
  @SpeakeasyMetadata()
  onDate?: number;

  @SpeakeasyMetadata()
  otherSite?: QuestionsMigratedFromOtherSite;

  @SpeakeasyMetadata()
  questionId?: number;
}


export class QuestionsMigratedToOtherSiteStyling extends SpeakeasyBase {
  @SpeakeasyMetadata()
  linkColor?: string;

  @SpeakeasyMetadata()
  tagBackgroundColor?: string;

  @SpeakeasyMetadata()
  tagForegroundColor?: string;
}


export class QuestionsMigratedToOtherSite extends SpeakeasyBase {
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
  styling?: QuestionsMigratedToOtherSiteStyling;

  @SpeakeasyMetadata()
  twitterAccount?: string;
}


export class QuestionsMigratedTo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  onDate?: number;

  @SpeakeasyMetadata()
  otherSite?: QuestionsMigratedToOtherSite;

  @SpeakeasyMetadata()
  questionId?: number;
}


export class QuestionsNotice extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  ownerUserId?: number;
}


export class QuestionsOwnerBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class QuestionsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptRate?: number;

  @SpeakeasyMetadata()
  badgeCounts?: QuestionsOwnerBadgeCounts;

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


export class Questions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  acceptedAnswerId?: number;

  @SpeakeasyMetadata()
  answerCount?: number;

  @SpeakeasyMetadata()
  answers?: any[];

  @SpeakeasyMetadata()
  body?: string;

  @SpeakeasyMetadata()
  bodyMarkdown?: string;

  @SpeakeasyMetadata()
  bountyAmount?: number;

  @SpeakeasyMetadata()
  bountyClosesDate?: number;

  @SpeakeasyMetadata()
  bountyUser?: QuestionsBountyUser;

  @SpeakeasyMetadata()
  canClose?: boolean;

  @SpeakeasyMetadata()
  canFlag?: boolean;

  @SpeakeasyMetadata()
  closeVoteCount?: number;

  @SpeakeasyMetadata()
  closedDate?: number;

  @SpeakeasyMetadata()
  closedDetails?: QuestionsClosedDetails;

  @SpeakeasyMetadata()
  closedReason?: string;

  @SpeakeasyMetadata()
  commentCount?: number;

  @SpeakeasyMetadata()
  comments?: any[];

  @SpeakeasyMetadata()
  communityOwnedDate?: number;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  deleteVoteCount?: number;

  @SpeakeasyMetadata()
  downVoteCount?: number;

  @SpeakeasyMetadata()
  downvoted?: boolean;

  @SpeakeasyMetadata()
  favoriteCount?: number;

  @SpeakeasyMetadata()
  favorited?: boolean;

  @SpeakeasyMetadata()
  isAnswered?: boolean;

  @SpeakeasyMetadata()
  lastActivityDate?: number;

  @SpeakeasyMetadata()
  lastEditDate?: number;

  @SpeakeasyMetadata()
  lastEditor?: QuestionsLastEditor;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  lockedDate?: number;

  @SpeakeasyMetadata()
  migratedFrom?: QuestionsMigratedFrom;

  @SpeakeasyMetadata()
  migratedTo?: QuestionsMigratedTo;

  @SpeakeasyMetadata()
  notice?: QuestionsNotice;

  @SpeakeasyMetadata()
  owner?: QuestionsOwner;

  @SpeakeasyMetadata()
  protectedDate?: number;

  @SpeakeasyMetadata()
  questionId?: number;

  @SpeakeasyMetadata()
  reopenVoteCount?: number;

  @SpeakeasyMetadata()
  score?: number;

  @SpeakeasyMetadata()
  shareLink?: string;

  @SpeakeasyMetadata()
  tags?: any[];

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  upVoteCount?: number;

  @SpeakeasyMetadata()
  upvoted?: boolean;

  @SpeakeasyMetadata()
  viewCount?: number;
}
