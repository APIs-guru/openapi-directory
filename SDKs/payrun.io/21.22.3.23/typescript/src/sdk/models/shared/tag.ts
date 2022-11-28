import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagTagTaggedItem
/** 
 * The tags' tagged item
**/
export class TagTagTaggedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class TagTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaggedItem" })
  taggedItem?: TagTagTaggedItem;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;
}


export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Tag" })
  tag?: TagTag;
}
