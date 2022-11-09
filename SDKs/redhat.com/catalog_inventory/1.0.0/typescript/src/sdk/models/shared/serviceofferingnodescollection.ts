import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceOfferingNode } from "./serviceofferingnode";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceOfferingNodesCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceOfferingNode })
  data?: ServiceOfferingNode[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
