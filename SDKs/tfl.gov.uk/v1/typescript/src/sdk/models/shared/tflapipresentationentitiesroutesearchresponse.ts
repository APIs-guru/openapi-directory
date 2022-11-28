import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSearchMatch } from "./tflapipresentationentitiesroutesearchmatch";



export class TflApiPresentationEntitiesRouteSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=input" })
  input?: string;

  @SpeakeasyMetadata({ data: "json, name=searchMatches", elemType: TflApiPresentationEntitiesRouteSearchMatch })
  searchMatches?: TflApiPresentationEntitiesRouteSearchMatch[];
}
