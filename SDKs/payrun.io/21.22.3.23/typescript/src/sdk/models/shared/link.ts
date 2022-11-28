import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinkLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: LinkLink;
}
