import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TflApiPresentationEntitiesPoint
/** 
 * Represents a point located at a latitude and longitude using the WGS84 co-ordinate system.
**/
export class TflApiPresentationEntitiesPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}
