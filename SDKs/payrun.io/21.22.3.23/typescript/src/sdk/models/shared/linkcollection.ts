import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkCollectionLinkCollectionLink
/** 
 * The link collections' links
**/
export class LinkCollectionLinkCollectionLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=Link" })
  link?: any[];
}


export class LinkCollectionLinkCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=Links" })
  links?: LinkCollectionLinkCollectionLink;
}


export class LinkCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=LinkCollection" })
  linkCollection?: LinkCollectionLinkCollection;
}
