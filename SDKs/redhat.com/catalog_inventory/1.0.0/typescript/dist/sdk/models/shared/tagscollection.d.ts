import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class TagsCollection extends SpeakeasyBase {
    data?: Tag[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
