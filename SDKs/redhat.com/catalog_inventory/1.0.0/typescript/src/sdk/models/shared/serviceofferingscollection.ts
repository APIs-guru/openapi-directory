import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceOffering } from "./serviceoffering";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServiceOfferingsCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServiceOffering })
  data?: ServiceOffering[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
