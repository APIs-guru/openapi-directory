import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesLineRouteSection } from "./tflapipresentationentitieslineroutesection";
import { TflApiPresentationEntitiesMatchedRouteSections } from "./tflapipresentationentitiesmatchedroutesections";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";



export class TflApiPresentationEntitiesRouteSearchMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineName" })
  lineName?: string;

  @SpeakeasyMetadata({ data: "json, name=lineRouteSection", elemType: TflApiPresentationEntitiesLineRouteSection })
  lineRouteSection?: TflApiPresentationEntitiesLineRouteSection[];

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;

  @SpeakeasyMetadata({ data: "json, name=matchedRouteSections", elemType: TflApiPresentationEntitiesMatchedRouteSections })
  matchedRouteSections?: TflApiPresentationEntitiesMatchedRouteSections[];

  @SpeakeasyMetadata({ data: "json, name=matchedStops", elemType: TflApiPresentationEntitiesMatchedStop })
  matchedStops?: TflApiPresentationEntitiesMatchedStop[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
