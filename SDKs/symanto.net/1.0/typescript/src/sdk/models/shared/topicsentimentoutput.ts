import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sentiment } from "./sentiment";
import { TopicSentiment } from "./topicsentiment";
import { Topic } from "./topic";


export class TopicSentimentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=sentiments", elemType: shared.Sentiment })
  sentiments?: Sentiment[];

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topicSentiments", elemType: shared.TopicSentiment })
  topicSentiments?: TopicSentiment[];

  @Metadata({ data: "json, name=topics", elemType: shared.Topic })
  topics?: Topic[];
}
