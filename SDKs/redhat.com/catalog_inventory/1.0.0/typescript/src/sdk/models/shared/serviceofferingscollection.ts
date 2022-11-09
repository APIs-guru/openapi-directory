import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceOffering } from "./serviceoffering";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServiceOfferingsCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServiceOffering })
  data?: ServiceOffering[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
