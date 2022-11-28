import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TflApiPresentationEntitiesBikePointOccupancy
/** 
 * Bike point occupancy
**/
export class TflApiPresentationEntitiesBikePointOccupancy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bikesCount" })
  bikesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=emptyDocks" })
  emptyDocks?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalDocks" })
  totalDocks?: number;
}
