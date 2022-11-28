import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceInventory } from "./serviceinventory";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceInventoriesCollection extends SpeakeasyBase {
    data?: ServiceInventory[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
