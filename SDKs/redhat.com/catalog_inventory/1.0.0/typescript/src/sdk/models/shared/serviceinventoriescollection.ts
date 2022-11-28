import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInventory } from "./serviceinventory";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServiceInventoriesCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServiceInventory })
  data?: ServiceInventory[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
