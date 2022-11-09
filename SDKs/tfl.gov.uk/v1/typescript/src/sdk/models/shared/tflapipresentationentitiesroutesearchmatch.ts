import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesLineRouteSection } from "./tflapipresentationentitieslineroutesection";
import { TflApiPresentationEntitiesMatchedRouteSections } from "./tflapipresentationentitiesmatchedroutesections";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";


export class TflApiPresentationEntitiesRouteSearchMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineName" })
  lineName?: string;

  @Metadata({ data: "json, name=lineRouteSection", elemType: shared.TflApiPresentationEntitiesLineRouteSection })
  lineRouteSection?: TflApiPresentationEntitiesLineRouteSection[];

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=matchedRouteSections", elemType: shared.TflApiPresentationEntitiesMatchedRouteSections })
  matchedRouteSections?: TflApiPresentationEntitiesMatchedRouteSections[];

  @Metadata({ data: "json, name=matchedStops", elemType: shared.TflApiPresentationEntitiesMatchedStop })
  matchedStops?: TflApiPresentationEntitiesMatchedStop[];

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
