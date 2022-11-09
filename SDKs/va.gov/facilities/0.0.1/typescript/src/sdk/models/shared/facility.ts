import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FacilityAttributes } from "./facilityattributes";

export enum FacilityTypeEnum {
    VaFacilities = "va_facilities"
}


// Facility
/** 
 * JSON API-compliant object describing a VA facility
**/
export class Facility extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: FacilityAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: FacilityTypeEnum;
}
