import { SpeakeasyBase } from "../../../internal/utils";
import { ServicePlan } from "./serviceplan";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class ServicePlansCollection extends SpeakeasyBase {
    data?: ServicePlan[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
