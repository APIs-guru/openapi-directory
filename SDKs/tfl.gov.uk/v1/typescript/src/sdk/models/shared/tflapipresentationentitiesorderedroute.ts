import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesOrderedRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanIds" })
  naptanIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: string;
}
