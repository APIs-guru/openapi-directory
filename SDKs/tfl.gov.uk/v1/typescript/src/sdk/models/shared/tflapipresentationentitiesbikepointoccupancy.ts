import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TflApiPresentationEntitiesBikePointOccupancy
/** 
 * Bike point occupancy
**/
export class TflApiPresentationEntitiesBikePointOccupancy extends SpeakeasyBase {
  @Metadata({ data: "json, name=bikesCount" })
  bikesCount?: number;

  @Metadata({ data: "json, name=emptyDocks" })
  emptyDocks?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=totalDocks" })
  totalDocks?: number;
}
