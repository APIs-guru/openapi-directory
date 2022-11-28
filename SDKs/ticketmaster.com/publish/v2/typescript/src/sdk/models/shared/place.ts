import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Area } from "./area";
import { City } from "./city";
import { Country } from "./country";
import { Location } from "./location";
import { State } from "./state";



// Place
/** 
 * Place
**/
export class Place extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: Address;

  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: Area;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: City;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: Country;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: State;
}
