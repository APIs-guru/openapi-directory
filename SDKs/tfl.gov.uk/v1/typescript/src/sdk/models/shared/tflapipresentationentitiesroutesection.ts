import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesRouteSectionNaptanEntrySequence } from "./tflapipresentationentitiesroutesectionnaptanentrysequence";


export class TflApiPresentationEntitiesRouteSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineId" })
  lineId?: string;

  @Metadata({ data: "json, name=lineString" })
  lineString?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=originationName" })
  originationName?: string;

  @Metadata({ data: "json, name=routeCode" })
  routeCode?: string;

  @Metadata({ data: "json, name=routeSectionNaptanEntrySequence", elemType: shared.TflApiPresentationEntitiesRouteSectionNaptanEntrySequence })
  routeSectionNaptanEntrySequence?: TflApiPresentationEntitiesRouteSectionNaptanEntrySequence[];

  @Metadata({ data: "json, name=validFrom" })
  validFrom?: Date;

  @Metadata({ data: "json, name=validTo" })
  validTo?: Date;
}
