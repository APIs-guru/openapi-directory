import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TweetInteractionMetrics } from "./tweetinteractionmetrics";
import { VideoMetrics } from "./videometrics";



// TweetMetrics
/** 
 * Metrics for a Tweet.
**/
export class TweetMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tweet" })
  tweet: TweetInteractionMetrics;

  @SpeakeasyMetadata({ data: "json, name=tweet_id" })
  tweetId: string;

  @SpeakeasyMetadata({ data: "json, name=video" })
  video?: VideoMetrics;
}
