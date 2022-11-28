import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FacilityAttributes } from "./facilityattributes";


export enum FacilityTypeEnum {
    VaFacilities = "va_facilities"
}


// Facility
/** 
 * JSON API-compliant object describing a VA facility
**/
export class Facility extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: FacilityAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: FacilityTypeEnum;
}
