import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { Topic } from "./topic";



export class TopicSentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sentence" })
  sentence?: string;

  @SpeakeasyMetadata({ data: "json, name=sentiment" })
  sentiment?: Sentiment;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: Topic;
}
