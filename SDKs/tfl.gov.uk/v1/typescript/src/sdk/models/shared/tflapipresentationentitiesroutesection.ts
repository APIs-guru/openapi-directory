import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesRouteSectionNaptanEntrySequence } from "./tflapipresentationentitiesroutesectionnaptanentrysequence";



export class TflApiPresentationEntitiesRouteSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lineId" })
  lineId?: string;

  @SpeakeasyMetadata({ data: "json, name=lineString" })
  lineString?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=originationName" })
  originationName?: string;

  @SpeakeasyMetadata({ data: "json, name=routeCode" })
  routeCode?: string;

  @SpeakeasyMetadata({ data: "json, name=routeSectionNaptanEntrySequence", elemType: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence })
  routeSectionNaptanEntrySequence?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[];

  @SpeakeasyMetadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=validTo" })
  validTo?: Date;
}
