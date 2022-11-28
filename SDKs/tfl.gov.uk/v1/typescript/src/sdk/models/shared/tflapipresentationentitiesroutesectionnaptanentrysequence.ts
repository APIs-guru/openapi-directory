import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";



export class TflApiPresentationEntitiesRouteSectionNaptanEntrySequence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @SpeakeasyMetadata({ data: "json, name=stopPoint" })
  stopPoint?: TflApiPresentationEntitiesStopPoint;
}
