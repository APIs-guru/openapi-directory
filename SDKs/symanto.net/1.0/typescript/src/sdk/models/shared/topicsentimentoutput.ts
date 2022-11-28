import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { TopicSentiment } from "./topicsentiment";
import { Topic } from "./topic";



export class TopicSentimentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=sentiments", elemType: Sentiment })
  sentiments?: Sentiment[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topicSentiments", elemType: TopicSentiment })
  topicSentiments?: TopicSentiment[];

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic })
  topics?: Topic[];
}
