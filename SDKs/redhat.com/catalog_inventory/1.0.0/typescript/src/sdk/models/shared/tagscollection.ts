import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class TagsCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Tag })
  data?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
