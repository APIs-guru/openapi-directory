import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetailedServiceAddress
/** 
 * Service location address.
**/
export class DetailedServiceAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_line1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_line2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=building_name_number" })
  buildingNameNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=clinic_name" })
  clinicName?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=wing_floor_or_room_number" })
  wingFloorOrRoomNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode?: string;
}
