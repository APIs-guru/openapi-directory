import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesRouteSearchMatch } from "./tflapipresentationentitiesroutesearchmatch";


export class TflApiPresentationEntitiesRouteSearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=searchMatches", elemType: shared.TflApiPresentationEntitiesRouteSearchMatch })
  searchMatches?: TflApiPresentationEntitiesRouteSearchMatch[];
}
