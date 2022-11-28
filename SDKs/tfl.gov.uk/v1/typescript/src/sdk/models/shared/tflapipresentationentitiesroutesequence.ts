import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesOrderedRoute } from "./tflapipresentationentitiesorderedroute";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesStopPointSequence } from "./tflapipresentationentitiesstoppointsequence";



export class TflApiPresentationEntitiesRouteSequence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=isOutboundOnly" })
  isOutboundOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=lineStrings" })
  lineStrings?: string[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=orderedLineRoutes", elemType: TflApiPresentationEntitiesOrderedRoute })
  orderedLineRoutes?: TflApiPresentationEntitiesOrderedRoute[];

  @SpeakeasyMetadata({ data: "json, name=stations", elemType: TflApiPresentationEntitiesMatchedStop })
  stations?: TflApiPresentationEntitiesMatchedStop[];

  @SpeakeasyMetadata({ data: "json, name=stopPointSequences", elemType: TflApiPresentationEntitiesStopPointSequence })
  stopPointSequences?: TflApiPresentationEntitiesStopPointSequence[];
}
