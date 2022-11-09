import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class TagsCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Tag })
  data?: Tag[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
