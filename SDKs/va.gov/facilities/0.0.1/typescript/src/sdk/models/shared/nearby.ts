import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NearbyAttributes } from "./nearbyattributes";

export enum NearbyTypeEnum {
    NearbyFacility = "NearbyFacility"
}


// Nearby
/** 
 * JSON API-compliant object describing a nearby VA facility
**/
export class Nearby extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: NearbyAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: NearbyTypeEnum;
}
