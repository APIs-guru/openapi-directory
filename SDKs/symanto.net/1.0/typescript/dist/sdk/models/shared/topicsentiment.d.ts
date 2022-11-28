import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { Topic } from "./topic";
export declare class TopicSentiment extends SpeakeasyBase {
    sentence?: string;
    sentiment?: Sentiment;
    topic?: Topic;
}
