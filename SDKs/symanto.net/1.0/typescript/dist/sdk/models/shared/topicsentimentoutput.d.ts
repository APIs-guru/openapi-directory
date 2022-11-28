import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { TopicSentiment } from "./topicsentiment";
import { Topic } from "./topic";
export declare class TopicSentimentOutput extends SpeakeasyBase {
    id?: string;
    language?: string;
    sentiments?: Sentiment[];
    text?: string;
    topicSentiments?: TopicSentiment[];
    topics?: Topic[];
}
