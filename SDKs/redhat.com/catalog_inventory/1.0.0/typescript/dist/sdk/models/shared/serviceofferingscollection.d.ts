import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceOffering } from "./serviceoffering";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServiceOfferingsCollection extends SpeakeasyBase {
    data?: ServiceOffering[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
