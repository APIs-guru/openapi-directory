import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServicePlan } from "./serviceplan";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";



export class ServicePlansCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: ServicePlan })
  data?: ServicePlan[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
