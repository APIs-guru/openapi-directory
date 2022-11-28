import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Addresses } from "./addresses";
import { DetailedService } from "./detailedservice";
import { Hours } from "./hours";
import { OperatingStatus } from "./operatingstatus";
import { Phone } from "./phone";
import { Satisfaction } from "./satisfaction";
import { Services } from "./services";
import { WaitTimes } from "./waittimes";


export enum FacilityAttributesActiveStatusEnum {
    A = "A",
    T = "T"
}

export enum FacilityAttributesFacilityTypeEnum {
    VaBenefitsFacility = "va_benefits_facility",
    VaCemetery = "va_cemetery",
    VaHealthFacility = "va_health_facility",
    VetCenter = "vet_center"
}


export class FacilityAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_status" })
  activeStatus?: FacilityAttributesActiveStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Addresses;

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string;

  @SpeakeasyMetadata({ data: "json, name=detailed_services", elemType: DetailedService })
  detailedServices?: DetailedService[];

  @SpeakeasyMetadata({ data: "json, name=facility_type" })
  facilityType: FacilityAttributesFacilityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=hours" })
  hours?: Hours;

  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "json, name=long" })
  long: number;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=operating_status" })
  operatingStatus: OperatingStatus;

  @SpeakeasyMetadata({ data: "json, name=operational_hours_special_instructions" })
  operationalHoursSpecialInstructions?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: Phone;

  @SpeakeasyMetadata({ data: "json, name=satisfaction" })
  satisfaction?: Satisfaction;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: Services;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=visn" })
  visn?: string;

  @SpeakeasyMetadata({ data: "json, name=wait_times" })
  waitTimes?: WaitTimes;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
