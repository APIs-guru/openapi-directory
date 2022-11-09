import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesOrderedRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=naptanIds" })
  naptanIds?: string[];

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: string;
}
