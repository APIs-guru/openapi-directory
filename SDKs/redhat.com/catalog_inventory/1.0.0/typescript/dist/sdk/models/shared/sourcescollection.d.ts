import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class SourcesCollection extends SpeakeasyBase {
    data?: Source[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
