import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagTagTaggedItem
/** 
 * The tags' tagged item
**/
export class TagTagTaggedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class TagTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Created" })
  created?: Date;

  @Metadata({ data: "json, name=TaggedItem" })
  taggedItem?: TagTagTaggedItem;

  @Metadata({ data: "json, name=Text" })
  text?: string;
}


export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Tag" })
  tag?: TagTag;
}
