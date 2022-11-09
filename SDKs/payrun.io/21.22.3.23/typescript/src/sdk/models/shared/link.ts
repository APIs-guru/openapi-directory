import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinkLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=Link" })
  link?: LinkLink;
}
