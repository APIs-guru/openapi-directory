import { SpeakeasyBase } from "../../../internal/utils";
import { FacilityAttributes } from "./facilityattributes";
export declare enum FacilityTypeEnum {
    VaFacilities = "va_facilities"
}
/**
 * JSON API-compliant object describing a VA facility
**/
export declare class Facility extends SpeakeasyBase {
    attributes: FacilityAttributes;
    id: string;
    type: FacilityTypeEnum;
}
