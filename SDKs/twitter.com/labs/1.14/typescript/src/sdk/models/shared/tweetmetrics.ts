import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TweetInteractionMetrics } from "./tweetinteractionmetrics";
import { VideoMetrics } from "./videometrics";


// TweetMetrics
/** 
 * Metrics for a Tweet.
**/
export class TweetMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=tweet" })
  tweet: TweetInteractionMetrics;

  @Metadata({ data: "json, name=tweet_id" })
  tweetId: string;

  @Metadata({ data: "json, name=video" })
  video?: VideoMetrics;
}
