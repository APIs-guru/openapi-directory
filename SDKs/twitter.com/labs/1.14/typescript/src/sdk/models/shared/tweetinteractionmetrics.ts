import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TweetInteractionMetrics
/** 
 * Interaction metrics for a Tweet.
**/
export class TweetInteractionMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=impression_count" })
  impressionCount?: number;

  @Metadata({ data: "json, name=like_count" })
  likeCount: number;

  @Metadata({ data: "json, name=quote_count" })
  quoteCount: number;

  @Metadata({ data: "json, name=reply_count" })
  replyCount: number;

  @Metadata({ data: "json, name=retweet_count" })
  retweetCount: number;
}
