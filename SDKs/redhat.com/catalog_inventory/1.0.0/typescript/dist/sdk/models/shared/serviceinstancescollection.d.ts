import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceInstance } from "./serviceinstance";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceInstancesCollection extends SpeakeasyBase {
    data?: ServiceInstance[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
