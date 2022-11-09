import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";


export class TflApiPresentationEntitiesRouteSectionNaptanEntrySequence extends SpeakeasyBase {
  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=stopPoint" })
  stopPoint?: TflApiPresentationEntitiesStopPoint;
}
