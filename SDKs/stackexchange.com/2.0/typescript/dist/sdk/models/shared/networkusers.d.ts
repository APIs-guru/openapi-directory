import { SpeakeasyBase } from "../../../internal/utils";
export declare class NetworkUsersBadgeCounts extends SpeakeasyBase {
    bronze?: number;
    gold?: number;
    silver?: number;
}
export declare class NetworkUsers extends SpeakeasyBase {
    accountId?: number;
    answerCount?: number;
    badgeCounts?: NetworkUsersBadgeCounts;
    creationDate?: number;
    lastAccessDate?: number;
    questionCount?: number;
    reputation?: number;
    siteName?: string;
    siteUrl?: string;
    topAnswers?: any[];
    topQuestions?: any[];
    userId?: number;
    userType?: string;
}
