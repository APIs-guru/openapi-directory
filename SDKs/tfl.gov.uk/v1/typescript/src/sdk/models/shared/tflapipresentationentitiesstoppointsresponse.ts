import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TflApiPresentationEntitiesStopPoint } from "./tflapipresentationentitiesstoppoint";


// TflApiPresentationEntitiesStopPointsResponse
/** 
 * A paged response containing StopPoints
**/
export class TflApiPresentationEntitiesStopPointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=centrePoint" })
  centrePoint?: number[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=stopPoints", elemType: shared.TflApiPresentationEntitiesStopPoint })
  stopPoints?: TflApiPresentationEntitiesStopPoint[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}
