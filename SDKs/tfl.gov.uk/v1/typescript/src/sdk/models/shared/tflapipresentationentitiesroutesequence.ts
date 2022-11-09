import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesOrderedRoute } from "./tflapipresentationentitiesorderedroute";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesStopPointSequence } from "./tflapipresentationentitiesstoppointsequence";


export class TflApiPresentationEntitiesRouteSequence extends SpeakeasyBase {
  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=isOutboundOnly" })
  isOutboundOnly?: boolean;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=lineStrings" })
  lineStrings?: string[];

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=orderedLineRoutes", elemType: shared.TflApiPresentationEntitiesOrderedRoute })
  orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[];

  @Metadata({ data: "json, name=stations", elemType: shared.TflApiPresentationEntitiesMatchedStop })
  stations?: TflApiPresentationEntitiesMatchedStop[];

  @Metadata({ data: "json, name=stopPointSequences", elemType: shared.TflApiPresentationEntitiesStopPointSequence })
  stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[];
}
