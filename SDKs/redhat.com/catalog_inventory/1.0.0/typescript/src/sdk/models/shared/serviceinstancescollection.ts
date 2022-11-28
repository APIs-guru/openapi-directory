import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceInstance } from "./serviceinstance";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServiceInstancesCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServiceInstance })
  data?: ServiceInstance[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
