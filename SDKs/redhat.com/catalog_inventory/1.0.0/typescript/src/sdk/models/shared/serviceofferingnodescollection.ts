import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceOfferingNode } from "./serviceofferingnode";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServiceOfferingNodesCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServiceOfferingNode })
  data?: ServiceOfferingNode[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
