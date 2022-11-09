import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Sentiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=negationTerm" })
  negationTerm?: string;

  @Metadata({ data: "json, name=parentCategory" })
  parentCategory?: string;

  @Metadata({ data: "json, name=positive" })
  positive?: boolean;

  @Metadata({ data: "json, name=scale" })
  scale?: number;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
