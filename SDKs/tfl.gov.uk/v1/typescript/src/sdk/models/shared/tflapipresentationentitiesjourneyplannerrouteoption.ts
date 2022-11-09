import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesIdentifier } from "./tflapipresentationentitiesidentifier";


export class TflApiPresentationEntitiesJourneyPlannerRouteOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=directions" })
  directions?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lineIdentifier" })
  lineIdentifier?: TflApiPresentationEntitiesIdentifier;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
