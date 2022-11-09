import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=area" })
  area?: Area;

  @Metadata({ data: "json, name=city" })
  city?: City;

  @Metadata({ data: "json, name=country" })
  country?: Country;

  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: State;
}
