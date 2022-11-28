import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NetworkUsersBadgeCounts extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bronze?: number;

  @SpeakeasyMetadata()
  gold?: number;

  @SpeakeasyMetadata()
  silver?: number;
}


export class NetworkUsers extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountId?: number;

  @SpeakeasyMetadata()
  answerCount?: number;

  @SpeakeasyMetadata()
  badgeCounts?: NetworkUsersBadgeCounts;

  @SpeakeasyMetadata()
  creationDate?: number;

  @SpeakeasyMetadata()
  lastAccessDate?: number;

  @SpeakeasyMetadata()
  questionCount?: number;

  @SpeakeasyMetadata()
  reputation?: number;

  @SpeakeasyMetadata()
  siteName?: string;

  @SpeakeasyMetadata()
  siteUrl?: string;

  @SpeakeasyMetadata()
  topAnswers?: any[];

  @SpeakeasyMetadata()
  topQuestions?: any[];

  @SpeakeasyMetadata()
  userId?: number;

  @SpeakeasyMetadata()
  userType?: string;
}
