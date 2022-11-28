import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkCollectionLinkCollectionLink
/** 
 * The link collections' links
**/
export class LinkCollectionLinkCollectionLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Link" })
  link?: any[];
}


export class LinkCollectionLinkCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: LinkCollectionLinkCollectionLink;
}


export class LinkCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LinkCollection" })
  linkCollection?: LinkCollectionLinkCollection;
}
