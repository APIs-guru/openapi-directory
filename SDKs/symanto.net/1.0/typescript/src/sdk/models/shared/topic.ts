import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=polarity" })
  polarity?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
