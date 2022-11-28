import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TflApiPresentationEntitiesMatchedRoute
/** 
 * Description of a Route used in Route search results.
**/
export class TflApiPresentationEntitiesMatchedRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originationName" })
  originationName?: string;

  @SpeakeasyMetadata({ data: "json, name=originator" })
  originator?: string;

  @SpeakeasyMetadata({ data: "json, name=routeCode" })
  routeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @SpeakeasyMetadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=validTo" })
  validTo?: Date;
}
