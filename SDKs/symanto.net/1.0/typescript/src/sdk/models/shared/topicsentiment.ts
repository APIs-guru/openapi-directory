import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Sentiment } from "./sentiment";
import { Topic } from "./topic";


export class TopicSentiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=sentence" })
  sentence?: string;

  @Metadata({ data: "json, name=sentiment" })
  sentiment?: Sentiment;

  @Metadata({ data: "json, name=topic" })
  topic?: Topic;
}
