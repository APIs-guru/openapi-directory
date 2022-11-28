import { SpeakeasyBase } from "../../../internal/utils";
import { TweetInteractionMetrics } from "./tweetinteractionmetrics";
import { VideoMetrics } from "./videometrics";
/**
 * Metrics for a Tweet.
**/
export declare class TweetMetrics extends SpeakeasyBase {
    tweet: TweetInteractionMetrics;
    tweetId: string;
    video?: VideoMetrics;
}
