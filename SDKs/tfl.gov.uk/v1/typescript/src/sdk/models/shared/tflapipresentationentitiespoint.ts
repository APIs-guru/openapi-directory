import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TflApiPresentationEntitiesPoint
/** 
 * Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
**/
export class TflApiPresentationEntitiesPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}
