import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class TasksCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: Task })
  data?: Task[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
