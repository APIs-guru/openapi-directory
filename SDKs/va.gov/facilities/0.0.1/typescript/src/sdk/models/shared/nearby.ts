import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NearbyAttributes } from "./nearbyattributes";


export enum NearbyTypeEnum {
    NearbyFacility = "NearbyFacility"
}


// Nearby
/** 
 * JSON API-compliant object describing a nearby VA facility
**/
export class Nearby extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: NearbyAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NearbyTypeEnum;
}
