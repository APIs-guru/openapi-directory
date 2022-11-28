import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=polarity" })
  polarity?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
