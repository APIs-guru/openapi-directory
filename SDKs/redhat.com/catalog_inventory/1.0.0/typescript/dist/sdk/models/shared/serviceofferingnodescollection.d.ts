import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceOfferingNode } from "./serviceofferingnode";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceOfferingNodesCollection extends SpeakeasyBase {
    data?: ServiceOfferingNode[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
