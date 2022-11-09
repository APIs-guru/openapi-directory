import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GenreSeedsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=genres" })
  genres?: string[];
}
