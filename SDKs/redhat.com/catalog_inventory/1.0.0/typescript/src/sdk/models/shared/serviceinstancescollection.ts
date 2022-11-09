import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceInstance } from "./serviceinstance";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceInstancesCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceInstance })
  data?: ServiceInstance[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
