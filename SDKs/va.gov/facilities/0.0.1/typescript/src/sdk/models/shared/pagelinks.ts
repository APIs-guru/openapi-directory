import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PageLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=first" })
  first?: string;

  @Metadata({ data: "json, name=last" })
  last?: string;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=prev" })
  prev?: string;

  @Metadata({ data: "json, name=related" })
  related?: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}
