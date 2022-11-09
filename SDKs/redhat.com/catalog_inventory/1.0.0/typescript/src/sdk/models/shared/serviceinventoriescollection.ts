import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceInventory } from "./serviceinventory";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceInventoriesCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceInventory })
  data?: ServiceInventory[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
