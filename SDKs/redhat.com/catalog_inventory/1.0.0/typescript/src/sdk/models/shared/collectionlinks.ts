import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;
}
