import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServicePlan } from "./serviceplan";
import { CollectionLinks } from "./collectionlinks";
import { CollectionMetadata } from "./collectionmetadata";


export class ServicePlansCollection extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ServicePlan })
  data?: ServicePlan[];

  @Metadata({ data: "json, name=links" })
  links?: CollectionLinks;

  @Metadata({ data: "json, name=meta" })
  meta?: CollectionMetadata;
}
