import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Task } from "./task";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";
export declare class TasksCollection extends SpeakeasyBase {
    data?: Task[];
    links?: CollectionLinks;
    meta?: CollectionMetadata;
}
