import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";



// TflApiPresentationEntitiesStopPointsResponse
/** 
 * A paged response containing StopPoints
**/
export class TflApiPresentationEntitiesStopPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=centrePoint" })
  centrePoint?: number[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=stopPoints", elemType: TflApiPresentationEntitiesStopPoint })
  stopPoints?: TflApiPresentationEntitiesStopPoint[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
