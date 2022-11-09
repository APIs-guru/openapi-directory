import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TflApiPresentationEntitiesMatchedRoute
/** 
 * Description of a Route used in Route search results.
**/
export class TflApiPresentationEntitiesMatchedRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originationName" })
  originationName?: string;

  @Metadata({ data: "json, name=originator" })
  originator?: string;

  @Metadata({ data: "json, name=routeCode" })
  routeCode?: string;

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: string;

  @Metadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @Metadata({ data: "json, name=validTo" })
  validTo?: Date;
}
