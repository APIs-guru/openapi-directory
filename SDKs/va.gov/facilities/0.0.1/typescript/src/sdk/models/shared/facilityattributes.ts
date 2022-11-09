import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Addresses } from "./addresses";
import { DetailedService } from "./detailedservice";
import { Hours } from "./hours";
import { OperatingStatus } from "./operatingstatus";
import { Phone } from "./phone";
import { Satisfaction } from "./satisfaction";
import { Services } from "./services";
import { WaitTimes } from "./waittimes";

export enum FacilityAttributesActiveStatusEnum {
    A = "A"
,    T = "T"
}

export enum FacilityAttributesFacilityTypeEnum {
    VaBenefitsFacility = "va_benefits_facility"
,    VaCemetery = "va_cemetery"
,    VaHealthFacility = "va_health_facility"
,    VetCenter = "vet_center"
}


export class FacilityAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_status" })
  activeStatus?: FacilityAttributesActiveStatusEnum;

  @Metadata({ data: "json, name=address" })
  address?: Addresses;

  @Metadata({ data: "json, name=classification" })
  classification?: string;

  @Metadata({ data: "json, name=detailed_services", elemType: shared.DetailedService })
  detailedServices?: DetailedService[];

  @Metadata({ data: "json, name=facility_type" })
  facilityType: FacilityAttributesFacilityTypeEnum;

  @Metadata({ data: "json, name=hours" })
  hours?: Hours;

  @Metadata({ data: "json, name=lat" })
  lat: number;

  @Metadata({ data: "json, name=long" })
  long: number;

  @Metadata({ data: "json, name=mobile" })
  mobile?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=operating_status" })
  operatingStatus: OperatingStatus;

  @Metadata({ data: "json, name=operational_hours_special_instructions" })
  operationalHoursSpecialInstructions?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: Phone;

  @Metadata({ data: "json, name=satisfaction" })
  satisfaction?: Satisfaction;

  @Metadata({ data: "json, name=services" })
  services?: Services;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "json, name=visn" })
  visn?: string;

  @Metadata({ data: "json, name=wait_times" })
  waitTimes?: WaitTimes;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
