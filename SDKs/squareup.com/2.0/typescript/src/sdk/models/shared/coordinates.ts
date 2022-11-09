import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Coordinates
/** 
 * Latitude and longitude coordinates.
**/
export class Coordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
