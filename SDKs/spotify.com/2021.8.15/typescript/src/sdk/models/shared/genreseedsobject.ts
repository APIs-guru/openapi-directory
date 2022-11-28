import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GenreSeedsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genres" })
  genres?: string[];
}
