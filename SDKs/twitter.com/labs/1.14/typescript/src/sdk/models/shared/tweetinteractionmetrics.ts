import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TweetInteractionMetrics
/** 
 * Interaction metrics for a Tweet.
**/
export class TweetInteractionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=impression_count" })
  impressionCount?: number;

  @SpeakeasyMetadata({ data: "json, name=like_count" })
  likeCount: number;

  @SpeakeasyMetadata({ data: "json, name=quote_count" })
  quoteCount: number;

  @SpeakeasyMetadata({ data: "json, name=reply_count" })
  replyCount: number;

  @SpeakeasyMetadata({ data: "json, name=retweet_count" })
  retweetCount: number;
}
