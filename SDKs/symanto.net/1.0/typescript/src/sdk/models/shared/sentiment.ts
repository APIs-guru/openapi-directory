import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Sentiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=negationTerm" })
  negationTerm?: string;

  @SpeakeasyMetadata({ data: "json, name=parentCategory" })
  parentCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=positive" })
  positive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
