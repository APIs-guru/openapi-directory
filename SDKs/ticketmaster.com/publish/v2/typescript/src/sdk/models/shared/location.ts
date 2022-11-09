import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * Location
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
