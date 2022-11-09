import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DetailedServiceAddress
/** 
 * Service location address.
**/
export class DetailedServiceAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=building_name_number" })
  buildingNameNumber?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=clinic_name" })
  clinicName?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=wing_floor_or_room_number" })
  wingFloorOrRoomNumber?: string;

  @Metadata({ data: "json, name=zip_code" })
  zipCode?: string;
}
